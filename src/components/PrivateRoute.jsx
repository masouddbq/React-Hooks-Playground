import React from "react";

export default function PrivateRouteExplainer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap');

        .pr-root {
          direction: rtl;
          font-family: 'Vazirmatn', sans-serif;
          background: transparent;
          color: #E5E9F2;
          padding: 3.5rem 1.5rem 5rem;
          min-height: 100vh;
        }

        .pr-container {
          max-width: 760px;
          margin: 0 auto;
        }

        /* ── Hero ── */
        .pr-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: black;
          background: rgba(91, 141, 239, 0.1);
          border: 1px solid rgba(91, 141, 239, 0.3);
          border-radius: 20px;
          padding: 5px 14px;
          margin-bottom: 1.5rem;
        }

        .pr-eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #5B8DEF;
        }

        .pr-h1 {
          font-size: 1.5rem;
          font-weight: 800;
          line-height: 1.35;
          color: darkblue;
          margin-bottom: 0.9rem;
        }

        .pr-h1 span {
          color: gray;
        }

        .pr-lede {
          font-size: 1rem;
          line-height: 1.9;
          color: black;
          margin-bottom: 3rem;
          max-width: 620px;
        }

        /* ── Gate visual (signature element) ── */
        .pr-gate {
          border: 1px solid #1E2A45;
          background: linear-gradient(10deg, black 0%, #0B1220 100%);
          border-radius: 16px;
          padding: 2rem 1.5rem 1.75rem;
          margin-bottom: 3rem;
          overflow: hidden;
          position: relative;
        }

        .pr-gate-track {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 1.5rem;
        }

        .pr-gate-node {
          flex: 1;
          text-align: center;
        }

        .pr-gate-icon {
          width: 46px;
          height: 46px;
          margin: 0 auto 10px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1.5px solid #2A3652;
          background: #101A30;
        }

        .pr-gate-icon.request { border-color: #5B8DEF; }
        .pr-gate-icon.check {
          border-color: #F5A524;
          animation: pr-pulse-ring 2.2s infinite;
        }
        .pr-gate-icon.allow { border-color: #34D399; }
        .pr-gate-icon.deny { border-color: #F87171; }

        @keyframes pr-pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(245, 165, 36, 0.35); }
          50% { box-shadow: 0 0 0 6px rgba(245, 165, 36, 0); }
        }

        .pr-gate-label {
          font-size: 0.74rem;
          font-weight: 600;
          color: #C4CCDC;
        }

        .pr-gate-sub {
          font-size: 0.66rem;
          color: #6B7690;
          margin-top: 2px;
        }

        .pr-gate-arrow {
          color: #2A3652;
          font-size: 1.1rem;
          flex-shrink: 0;
        }

        .pr-gate-outcomes {
          display: flex;
          gap: 10px;
          border-top: 1px dashed #1E2A45;
          padding-top: 1.25rem;
        }

        .pr-outcome {
          flex: 1;
          border-radius: 10px;
          padding: 0.85rem 1rem;
          font-size: 0.78rem;
          line-height: 1.6;
        }

        .pr-outcome.ok {
          background: rgba(52, 211, 153, 0.08);
          border: 1px solid rgba(52, 211, 153, 0.25);
        }
        .pr-outcome.no {
          background: rgba(248, 113, 113, 0.08);
          border: 1px solid rgba(248, 113, 113, 0.25);
        }

        .pr-outcome-title {
          font-weight: 700;
          margin-bottom: 4px;
        }
        .pr-outcome.ok .pr-outcome-title { color: #34D399; }
        .pr-outcome.no .pr-outcome-title { color: #F87171; }
        .pr-outcome-desc { color: #9AA5B8; }

        /* ── Section blocks ── */
        .pr-section {
          margin-bottom: 2.75rem;
        }

        .pr-section-head {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 0.9rem;
        }

        .pr-section-num {
          font-family: 'Fira Code', monospace;
          font-size: 0.78rem;
          color: #5B8DEF;
          font-weight: 500;
        }

        .pr-section-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: black;
        }

        .pr-p {
          font-size: 0.92rem;
          line-height: 2;
          color: black;
          margin-bottom: 0.9rem;
        }

        .pr-p code, .pr-inline-code {
          font-family: 'Fira Code', monospace;
          font-size: 0.82rem;
          background: black;
          border: 1px solid #232F4A;
          color: #7DD3FC;
          padding: 2px 7px;
          border-radius: 5px;
        }

        /* ── Code block ── */
        .pr-code {
          background: black;
          border: 1px solid #1E2A45;
          border-radius: 12px;
          padding: 1.25rem 1.4rem;
          font-family: 'Fira Code', monospace;
          font-size: 0.8rem;
          line-height: 2;
          overflow-x: auto;
          direction: ltr;
          text-align: left;
          margin: 1rem 0 0.5rem;
        }

        .pr-code .kw { color: #7DD3FC; }
        .pr-code .fn { color: #C084FC; }
        .pr-code .str { color: #86EFAC; }
        .pr-code .cm { color: #5A6688; font-style: italic; }
        .pr-code .tag { color: #F5A524; }
        .pr-code .pl { color: #E5E9F2; }

        .pr-code-line {
          display: flex;
          gap: 1.1rem;
        }

        .pr-code-num {
          color: #3A4562;
          user-select: none;
          min-width: 16px;
          text-align: right;
        }

        .pr-annot {
          font-size: 0.76rem;
          color: #6B7690;
          margin-top: 0.6rem;
          direction: rtl;
          text-align: right;
          line-height: 1.8;
        }

        /* ── Nested route diagram ── */
        .pr-tree {
          background: black;
          border: 1px solid #1E2A45;
          border-radius: 12px;
          padding: 1.4rem 1.6rem;
          font-family: 'Fira Code', monospace;
          font-size: 0.8rem;
          line-height: 2.1;
          direction: ltr;
          text-align: left;
          overflow-x: auto;
        }

        .pr-tree .lvl0 { color: #5B8DEF; font-weight: 500; }
        .pr-tree .lvl1 { color: #C4CCDC; padding-right: 1.4rem; }
        .pr-tree .lvl2 { color: #86EFAC; padding-right: 2.8rem; }
        .pr-tree .lvl3 { color: #F5A524; padding-right: 4.2rem; }
        .pr-tree .muted { color: #4A5578; }

        /* ── Checklist ── */
        .pr-checklist {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .pr-check-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          background: black;
          border: 1px solid #1E2A45;
          border-radius: 10px;
          padding: 0.85rem 1rem;
        }

        .pr-check-badge {
          font-family: 'Fira Code', monospace;
          font-size: 0.68rem;
          font-weight: 600;
          color: #5B8DEF;
          background: rgba(91,141,239,0.12);
          border-radius: 5px;
          padding: 2px 7px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .pr-check-text {
          font-size: 0.85rem;
          line-height: 1.8;
          color: #B4BDCE;
        }

        .pr-check-text b {
          color: #E5E9F2;
        }

        /* ── Footer note ── */
        .pr-footnote {
          margin-top: 3rem;
          border-top: 1px solid #1E2A45;
          padding-top: 1.5rem;
          font-size: 0.8rem;
          color: #6B7690;
          line-height: 1.9;
        }

        @media (max-width: 520px) {
          .pr-gate-track { flex-wrap: wrap; }
          .pr-gate-arrow { display: none; }
          .pr-gate-node { flex: 1 1 40%; }
          .pr-gate-outcomes { flex-direction: column; }
        }
      `}</style>

      <div className="pr-root">
        <div className="pr-container">
          {/* Hero */}
          <div className="pr-eyebrow">
            <span className="pr-eyebrow-dot" />
            React Router · Route Guard Pattern
          </div>

          <h1 className="pr-h1">
            <span>PrivateRoute</span> چطور از روت‌ها محافظت می‌کنه؟
          </h1>

          <p className="pr-lede">
            به‌جای اینکه توی هر صفحه جداگانه چک کنید کاربر اجازه‌ی ورود داره یا نه،
            یک کامپوننت واسط می‌سازید که مثل یک دروازه‌ی بازرسی عمل می‌کنه: هر درخواست
            ورود به یک مسیر محافظت‌شده، اول از این دروازه رد می‌شه.
          </p>

          {/* Signature gate visual */}
          <div className="pr-gate">
            <div className="pr-gate-track">
              <div className="pr-gate-node">
                <div className="pr-gate-icon request">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#5B8DEF" strokeWidth="1.8">
                    <path d="M12 2 4 6v6c0 5 3.5 8.5 8 10 4.5-1.5 8-5 8-10V6l-8-4Z" />
                  </svg>
                </div>
                <div className="pr-gate-label">درخواست مسیر</div>
                <div className="pr-gate-sub">مثلاً /settings</div>
              </div>

              <div className="pr-gate-arrow">←</div>

              <div className="pr-gate-node">
                <div className="pr-gate-icon check">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F5A524" strokeWidth="1.8">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 3" />
                  </svg>
                </div>
                <div className="pr-gate-label">PrivateRoute</div>
                <div className="pr-gate-sub">چک احراز هویت</div>
              </div>

              <div className="pr-gate-arrow">←</div>

              <div className="pr-gate-node">
                <div className="pr-gate-icon allow">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.8">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <div className="pr-gate-label">Outlet</div>
                <div className="pr-gate-sub">نمایش صفحه</div>
              </div>
            </div>

            <div className="pr-gate-outcomes">
              <div className="pr-outcome ok">
                <div className="pr-outcome-title">✓ مجاز است</div>
                <div className="pr-outcome-desc">
                  کاربر لاگین کرده → <span className="pr-inline-code">&lt;Outlet /&gt;</span> رندر
                  می‌شه و همه‌ی route های فرزند نمایش داده می‌شن.
                </div>
              </div>
              <div className="pr-outcome no">
                <div className="pr-outcome-title">✕ مجاز نیست</div>
                <div className="pr-outcome-desc">
                  کاربر لاگین نکرده → <span className="pr-inline-code">&lt;Navigate /&gt;</span> کاربر
                  رو به صفحه‌ی لاگین می‌فرسته.
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: logic breakdown */}
          <div className="pr-section">
            <div className="pr-section-head">
              <span className="pr-section-num">01</span>
              <span className="pr-section-title">داخل کامپوننت چه اتفاقی می‌افته</span>
            </div>
            <p className="pr-p">
              همه‌ی منطق تصمیم‌گیری — این‌که کاربر کیه و چه اجازه‌ای داره — فقط همین‌جا،
              توی یک فایل نوشته می‌شه. کامپوننت در نهایت یکی از این دو تا رو
              برمی‌گردونه: یا <code>Outlet</code> (یعنی «برو تو») یا{" "}
              <code>Navigate</code> (یعنی «برگرد»).
            </p>

            <div className="pr-code">
              <div className="pr-code-line"><span className="pr-code-num">1</span><span className="pl"><span className="kw">const</span> token = localStorage.<span className="fn">getItem</span>(<span className="str">'token'</span>)</span></div>
              <div className="pr-code-line"><span className="pr-code-num">2</span><span className="pl"><span className="kw">const</span> isAuthenticated = <span className="fn">Boolean</span>(token)</span></div>
              <div className="pr-code-line"><span className="pr-code-num">3</span><span className="pl"></span></div>
              <div className="pr-code-line"><span className="pr-code-num">4</span><span className="pl"><span className="kw">if</span> (!isAuthenticated) {"{"}</span></div>
              <div className="pr-code-line"><span className="pr-code-num">5</span><span className="pl">&nbsp;&nbsp;<span className="kw">return</span> <span className="tag">&lt;Navigate</span> to=<span className="str">'/login'</span> replace <span className="tag">/&gt;</span></span></div>
              <div className="pr-code-line"><span className="pr-code-num">6</span><span className="pl">{"}"}</span></div>
              <div className="pr-code-line"><span className="pr-code-num">7</span><span className="pl"></span></div>
              <div className="pr-code-line"><span className="pr-code-num">8</span><span className="pl"><span className="kw">return</span> <span className="tag">&lt;Outlet</span> <span className="tag">/&gt;</span></span></div>
            </div>
            <div className="pr-annot">
              خط ۴ تا ۶: اگه شرط برقرار نبود، تابع همون‌جا با <code>Navigate</code> متوقف
              می‌شه و به خط ۸ اصلاً نمی‌رسه. خط ۸ فقط وقتی اجرا می‌شه که کاربر مجاز باشه.
            </div>
          </div>

          {/* Section 2: why Outlet */}
          <div className="pr-section">
            <div className="pr-section-head">
              <span className="pr-section-num">02</span>
              <span className="pr-section-title">چرا Outlet و نه یک صفحه‌ی خاص</span>
            </div>
            <p className="pr-p">
              <code>PrivateRoute</code> نمی‌دونه و اهمیتی هم نمی‌ده که پشتش قراره چی
              رندر بشه — داشبورد، تنظیمات، یا یک صفحه‌ی تو در توی دیگه. کارش فقط
              دروازه‌بانیه. <code>Outlet</code> یعنی «هر route فرزندی که در پیکربندی
              روتر زیر من تعریف شده، همین‌جا جاش رو باز کن».
            </p>
            <p className="pr-p">
              همین ویژگی باعث می‌شه بتونید این کامپوننت رو فقط <b>یک‌بار</b> بنویسید
              و به عنوان یک لایه‌ی والد، دور هر تعداد route ساده یا تو در تو
              (nested) بکشید.
            </p>
          </div>

          {/* Section 3: nested usage diagram */}
          <div className="pr-section">
            <div className="pr-section-head">
              <span className="pr-section-num">03</span>
              <span className="pr-section-title">استفاده برای route های تو در تو</span>
            </div>
            <p className="pr-p">
              کافیه <code>PrivateRoute</code> رو به عنوان یک route والد <b>بدون path</b>{" "}
              تعریف کنید و بقیه‌ی route ها رو زیرش به عنوان <code>children</code> بذارید.
              فرقی نمی‌کنه یک لایه باشن یا سه لایه — همه از یک دروازه رد می‌شن.
            </p>

            <div className="pr-tree">
              <div className="lvl0">element: &lt;PrivateRoute /&gt;</div>
              <div className="lvl1">children: [</div>
              <div className="lvl2">path: '/', element: &lt;Dashboard /&gt; <span className="muted">// محافظت‌شده</span></div>
              <div className="lvl2">path: '/settings', element: &lt;Settings /&gt;</div>
              <div className="lvl3">children: [</div>
              <div className="lvl3">&nbsp;&nbsp;path: 'profile', element: &lt;Profile /&gt; <span className="muted">// این هم محافظت‌شده</span></div>
              <div className="lvl3">]</div>
              <div className="lvl1">]</div>
            </div>
          </div>

          {/* Section 4: checklist */}
          <div className="pr-section">
            <div className="pr-section-head">
              <span className="pr-section-num">04</span>
              <span className="pr-section-title">نکاتی که هنگام ساخت باید رعایت کنید</span>
            </div>
            <div className="pr-checklist">
              <div className="pr-check-item">
                <span className="pr-check-badge">replace</span>
                <span className="pr-check-text">
                  روی <code>Navigate</code> از پراپ <b>replace</b> استفاده کنید تا صفحه‌ی
                  محافظت‌شده وارد تاریخچه‌ی مرورگر نشه؛ وگرنه با دکمه‌ی back دوباره بهش
                  می‌رسه.
                </span>
              </div>
              <div className="pr-check-item">
                <span className="pr-check-badge">state</span>
                <span className="pr-check-text">
                  اگه چک احراز هویت async باشه (مثلاً درخواست به سرور)، یک حالت{" "}
                  <b>loading</b> هم مدیریت کنید تا قبل از رسیدن جواب، کاربر رو اشتباهی
                  ریدایرکت نکنید.
                </span>
              </div>
              <div className="pr-check-item">
                <span className="pr-check-badge">context</span>
                <span className="pr-check-text">
                  به‌جای خوندن مستقیم از <code>localStorage</code>، بهتره منطق را در یک
                  هوک سفارشی مثل <b>useAuth()</b> متمرکز کنید تا قابل تست و استفاده‌ی
                  مجدد باشه.
                </span>
              </div>
              <div className="pr-check-item">
                <span className="pr-check-badge">role</span>
                <span className="pr-check-text">
                  اگه علاوه بر لاگین بودن، سطح دسترسی (نقش کاربر) هم مهمه، یک پراپ مثل{" "}
                  <b>allowedRoles</b> به کامپوننت اضافه کنید و آن را هم قبل از{" "}
                  <code>Outlet</code> چک کنید.
                </span>
              </div>
            </div>
          </div>

          <div className="pr-footnote">
            خلاصه: <code>PrivateRoute</code> یک کامپوننت تصمیم‌گیرنده است، نه یک صفحه.
            وظیفه‌اش این‌که یا مسیر رو باز بذاره (<code>Outlet</code>) یا کاربر رو
            برگردونه (<code>Navigate</code>) — و چون این تصمیم در یک نقطه‌ی مرکزی
            گرفته می‌شه، اضافه کردن یا تغییر route های محافظت‌شده در آینده فقط به
            ویرایش پیکربندی روتر نیاز داره، نه دست‌کاری هر صفحه.
          </div>
        </div>
      </div>
    </>
  );
}