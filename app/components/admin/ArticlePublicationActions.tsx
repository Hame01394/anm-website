
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ArticleStatus = "draft" | "scheduled" | "published" | "archived";

type Props = {
  articleId: string;
  status: ArticleStatus;
  onUpdated: (status: ArticleStatus) => void;
};

const actionDetails = {
  publish: {
    title: "Publish this article?",
    description:
      "The article will become publicly visible on the ANM Media page.",
    confirm: "Publish Article",
    color: "bg-[#142b45] hover:bg-[#203d5d]",
  },
  unpublish: {
    title: "Unpublish this article?",
    description:
      "The article will be removed from the public Media page and returned to Draft.",
    confirm: "Unpublish Article",
    color: "bg-amber-700 hover:bg-amber-800",
  },
  archive: {
    title: "Archive this article?",
    description:
      "The article will be removed from the public Media page and moved to Archived.",
    confirm: "Archive Article",
    color: "bg-red-700 hover:bg-red-800",
  },
  restore: {
    title: "Restore this article?",
    description:
      "The article will be restored as a Draft. You can publish it again when ready.",
    confirm: "Restore to Draft",
    color: "bg-[#142b45] hover:bg-[#203d5d]",
  },
  delete: {
    title: "Permanently delete this article?",
    description:
      "This action cannot be undone. The article will be permanently removed from the newsroom.",
    confirm: "Delete Permanently",
    color: "bg-red-700 hover:bg-red-800",
  },
} as const;

type Action = keyof typeof actionDetails;

export default function ArticlePublicationActions({
  articleId,
  status,
  onUpdated,
}: Props) {
  const router = useRouter();

  const [pendingAction, setPendingAction] = useState<Action | null>(null);
  const [working, setWorking] = useState(false);
  const [error, setError] = useState("");

  async function executeAction() {
    if (!pendingAction) return;

    setWorking(true);
    setError("");

    try {
      const isDelete = pendingAction === "delete";

      const response = await fetch(
        `/api/admin/articles/${articleId}`,
        {
          method: isDelete ? "DELETE" : "PATCH",
          headers: { "Content-Type": "application/json" },
          ...(isDelete
            ? {}
            : {
                body: JSON.stringify({ action: pendingAction }),
              }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Unable to complete this action."
        );
      }

      if (isDelete) {
        router.push("/admin/dashboard/articles");
        router.refresh();
        return;
      }

      onUpdated(data.status as ArticleStatus);
      setPendingAction(null);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setWorking(false);
    }
  }

  return (
    <section className="border border-[#d9d4c8] bg-white p-5">
      <h3 className="text-sm font-bold uppercase tracking-wider text-[#142b45]">
        Publication Controls
      </h3>

      <p className="mt-2 text-sm text-gray-600">
        Current status:{" "}
        <strong className="capitalize text-[#142b45]">
          {status}
        </strong>
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        {status !== "published" && status !== "archived" && (
          <button
            type="button"
            onClick={() => {
              setError("");
              setPendingAction("publish");
            }}
            className="bg-[#142b45] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#203d5d]"
          >
            Publish Article
          </button>
        )}

        {status === "published" && (
          <button
            type="button"
            onClick={() => {
              setError("");
              setPendingAction("unpublish");
            }}
            className="bg-amber-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-amber-800"
          >
            Unpublish
          </button>
        )}

        {status !== "archived" && (
          <button
            type="button"
            onClick={() => {
              setError("");
              setPendingAction("archive");
            }}
            className="border border-red-700 px-5 py-3 text-sm font-bold text-red-700 transition hover:bg-red-50"
          >
            Archive
          </button>
        )}

        {status === "archived" && (
          <button
            type="button"
            onClick={() => {
              setError("");
              setPendingAction("restore");
            }}
            className="bg-[#142b45] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#203d5d]"
          >
            Restore to Draft
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            setError("");
            setPendingAction("delete");
          }}
          className="border border-red-700 px-5 py-3 text-sm font-bold text-red-700 transition hover:bg-red-700 hover:text-white"
        >
          Delete Article
        </button>
      </div>

      {error && (
        <p className="mt-4 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      {pendingAction && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-5"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget && !working) {
              setPendingAction(null);
            }
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="publication-confirmation-title"
            className="w-full max-w-md border border-[#d9d4c8] bg-white p-7 shadow-2xl"
          >
            <h2
              id="publication-confirmation-title"
              className="text-xl font-bold text-[#142b45]"
            >
              {actionDetails[pendingAction].title}
            </h2>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {actionDetails[pendingAction].description}
            </p>

            <div className="mt-7 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                disabled={working}
                onClick={() => setPendingAction(null)}
                className="border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Cancel
              </button>

              <button
                type="button"
                disabled={working}
                onClick={executeAction}
                className={`${actionDetails[pendingAction].color} px-5 py-3 text-sm font-bold text-white disabled:opacity-50`}
              >
                {working
                  ? "Please wait..."
                  : actionDetails[pendingAction].confirm}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
