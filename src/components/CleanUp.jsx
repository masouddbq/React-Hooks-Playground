import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function FetchCleanup() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [postId, setPostId] = useState(1);

  const location = useLocation();

  useEffect(() => {
    // ── ۱. ساخت AbortController برای کنسل کردن fetch هنگام unmount
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      

      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${postId}`,
          { signal } // ── ۲. پاس دادن signal به fetch
        );

        if (!response.ok) throw new Error("Failed to fetch post");

        const data = await response.json();
        setPost(data);
      } catch (err) {
        // ── ۳. اگه خطا از abort بود نادیده بگیر
        if (err.name === "AbortError") {
          console.log("Fetch aborted — component unmounted");
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPost();

    // ── ۴. Cleanup: وقتی کامپوننت unmount یا postId عوض شد، fetch کنسل میشه
    return () => {
      controller.abort();
    };
  }, [postId]); // ── هر بار postId عوض شد، effect دوباره اجرا میشه

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

        .fc-wrapper {
          font-family: 'Inter', sans-serif;
          max-width: 640px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
          color: #1e293b;
          direction : rtl;
        }

        .fc-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          color: #2563eb;
          border: 1px solid #bfdbfe;
          border-radius: 20px;
          padding: 4px 12px;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 1rem;
        }

        .fc-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #2563eb;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .fc-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: #0f172a;
        }

        .fc-subtitle {
          font-size: 0.85rem;
          color: #64748b;
          margin-bottom: 1.75rem;
          line-height: 1.6;
        }

        /* ── Code hint box ── */
        .fc-code-hint {
          background: #0f172a;
          border-radius: 10px;
          padding: 1rem 1.25rem;
          margin-bottom: 1.75rem;
          font-family: 'Fira Code', monospace;
          font-size: 0.78rem;
          line-height: 1.8;
          color: #94a3b8;
          overflow-x: auto;
        }

        .fc-code-hint .kw  { color: #7dd3fc; }
        .fc-code-hint .fn  { color: #c084fc; }
        .fc-code-hint .str { color: #86efac; }
        .fc-code-hint .cm  { color: #475569; font-style: italic; }

        /* ── Controls ── */
        .fc-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .fc-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
        }

        .fc-btn {
          height: 36px;
          padding: 0 16px;
          border-radius: 8px;
          border: 1.5px solid #e2e8f0;
          background: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.15s;
        }

        .fc-btn:hover:not(:disabled) {
          border-color: #2563eb;
          color: #2563eb;
          background: #eff6ff;
        }

        .fc-btn:disabled {
          opacity: 0.4;
          cursor: not-allowed;
        }

        .fc-btn-active {
          background: #2563eb;
          border-color: #2563eb;
          color: #fff;
        }

        .fc-btn-active:hover:not(:disabled) {
          background: #1d4ed8;
          border-color: #1d4ed8;
          color: #fff;
        }

        /* ── Result card ── */
        .fc-card {
          border: 1.5px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
        }

        .fc-card-header {
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          padding: 0.75rem 1.25rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .fc-card-header-title {
          font-size: 0.78rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .fc-status {
          display: flex;
          align-items: center;
          gap: 5px;
          font-size: 0.72rem;
          font-weight: 600;
        }

        .fc-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
        }

        .fc-status.loading .fc-status-dot { background: #f59e0b; animation: pulse 1s infinite; }
        .fc-status.success .fc-status-dot { background: #22c55e; }
        .fc-status.error   .fc-status-dot { background: #ef4444; }

        .fc-status.loading { color: #d97706; }
        .fc-status.success { color: #16a34a; }
        .fc-status.error   { color: #dc2626; }

        .fc-card-body {
          padding: 1.25rem;
          min-height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Loading skeleton */
        .fc-skeleton {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .fc-skel-line {
          height: 14px;
          border-radius: 6px;
          background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
          background-size: 200% 100%;
          animation: shimmer 1.2s infinite;
        }

        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* Post content */
        .fc-post {
          width: 100%;
        }

        .fc-post-id {
          font-size: 0.7rem;
          font-weight: 600;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 6px;
        }

        .fc-post-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
          line-height: 1.4;
          text-transform: capitalize;
        }

        .fc-post-body {
          font-size: 0.85rem;
          color: #475569;
          line-height: 1.7;
        }

        /* Error */
        .fc-error {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #dc2626;
          font-size: 0.85rem;
          font-weight: 500;
        }

        /* ── Info box ── */
        .fc-info {
          margin-top: 1.25rem;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 10px;
          padding: 0.9rem 1.1rem;
          font-size: 0.78rem;
          color: #166534;
          line-height: 1.7;
        }

        .fc-info strong {
          color: #15803d;
        }
      `}</style>

      <div className="fc-wrapper">
        <div className="fc-badge">
          <span className="fc-badge-dot" />
          useEffect + AbortController
        </div>

        <h2 className="fc-title">پاک‌سازی عملیات دریافت (Fetch)</h2>
        <p className="fc-subtitle">
          Every time the post ID changes or the component unmounts,
          the previous fetch is automatically aborted via <code>AbortController</code>.
        </p>

        {/* Code hint */}
        <div className="fc-code-hint">
          <span className="cm">// Cleanup runs on unmount OR when postId changes</span><br />
          <span className="kw">return</span> () {"=>"} {"{"}<br />
          &nbsp;&nbsp;controller.<span className="fn">abort</span>();&nbsp;
          <span className="cm">// ← cancels in-flight fetch</span><br />
          {"}"};
        </div>

        {/* Post ID selector */}
        <div className="fc-controls">
          <span className="fc-label">Post ID:</span>
          {[1, 2, 3, 5, 10].map((id) => (
            <button
              key={id}
              className={`fc-btn ${postId === id ? "fc-btn-active" : ""}`}
              onClick={() => setPostId(id)}
              disabled={loading}
            >
              #{id}
            </button>
          ))}
        </div>

        {/* Result card */}
        <div className="fc-card">
          <div className="fc-card-header">
            <span className="fc-card-header-title">Response</span>
            {loading && (
              <span className="fc-status loading">
                <span className="fc-status-dot" /> Fetching...
              </span>
            )}
            {!loading && !error && post && (
              <span className="fc-status success">
                <span className="fc-status-dot" /> Success
              </span>
            )}
            {!loading && error && (
              <span className="fc-status error">
                <span className="fc-status-dot" /> Error
              </span>
            )}
          </div>

          <div className="fc-card-body">
            {/* Loading skeleton */}
            {loading && (
              <div className="fc-skeleton">
                <div className="fc-skel-line" style={{ width: "40%" }} />
                <div className="fc-skel-line" style={{ width: "75%" }} />
                <div className="fc-skel-line" style={{ width: "90%" }} />
                <div className="fc-skel-line" style={{ width: "60%" }} />
              </div>
            )}

            {/* Post data */}
            {!loading && !error && post && (
              <div className="fc-post">
                <div className="fc-post-id">Post #{post.id}</div>
                <div className="fc-post-title">{post.title}</div>
                <div className="fc-post-body">{post.body}</div>
              </div>
            )}

            {/* Error */}
            {!loading && error && (
              <div className="fc-error">
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {error}
              </div>
            )}
          </div>
        </div>


        {/* Info */}
        <div className="fc-info">
          <strong>How it works:</strong> When you switch between post IDs quickly,
          the previous fetch is cancelled before it resolves —
          preventing race conditions and state updates on unmounted components.
          Open the console to see <code>AbortError</code> logs.
        </div>
      </div>
    </>
  );
}
