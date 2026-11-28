
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { pool } from "@/lib/auth";
import { connection } from "next/server";

export async function requireNewsroomAdmin() {
    await connection();
  // Verify the Better Auth session on the server.
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/admin/login");
  }

  // Check the administrator role in Better Auth.
  if (session.user.role !== "admin") {
    redirect("/admin/login");
  }

  // Also verify the user's active administrator record
  // in the newsroom database.
  const result = await pool.query(
    `SELECT id, auth_user_id, display_name, email, role
     FROM public.newsroom_users
     WHERE auth_user_id = $1
       AND is_active = TRUE
       AND role = 'admin'
     LIMIT 1`,
    [session.user.id]
  );

  if (result.rows.length === 0) {
    redirect("/admin/login");
  }

  return {
    session,
    newsroomUser: result.rows[0],
  };
}
