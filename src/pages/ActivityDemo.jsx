import React from 'react'

const Activity = () => {
  return (
    <div>
         <div dir="rtl" className="bg-transparent text-slate-100 px-6 pt-14 pb-20 min-h-screen">
    <div className="max-w-3xl mx-auto">

      {/* Hero */}
      <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-wide text-black bg-indigo-500/10 border border-indigo-400/30 rounded-full px-3.5 py-1.5 mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
        React 19.2 · Visibility Primitive
      </div>

      <h1 className="text-3xl font-extrabold leading-snug text-blue-950 mb-3">
        <span className="text-gray-500">Activity</span> چطور یک بخش از UI رو مخفی می‌کنه بدون اینکه state از بین بره؟
      </h1>

      <p className="text-base leading-8 text-black mb-10 max-w-xl">
        به‌جای اینکه با رندر شرطی یک تب یا پنل رو کامل از بین ببرید و بعد از نو بسازید،
        Activity اون رو مثل یک برنامه‌ی موبایل به حالت «پس‌زمینه» می‌بره: state و DOM سرجاشون
        می‌مونن، فقط افکت‌ها متوقف می‌شن.
      </p>

      {/* Signature visual: three states */}
      <div className="border border-slate-800 bg-gradient-to-b from-black to-slate-950 rounded-2xl p-6 mb-12">
        <div className="grid grid-cols-3 gap-3 mb-6">

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2.5 rounded-xl border border-red-400/70 bg-slate-900 flex items-center justify-center">
              <i className="ti ti-trash text-red-400 text-lg" aria-hidden="true" />
            </div>
            <div className="text-xs font-semibold text-slate-300">رندر شرطی</div>
            <div className="text-[10px] text-slate-500 mt-0.5">state از بین می‌ره</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2.5 rounded-xl border border-amber-400/70 bg-slate-900 flex items-center justify-center animate-pulse">
              <i className="ti ti-eye-off text-amber-400 text-lg" aria-hidden="true" />
            </div>
            <div className="text-xs font-semibold text-slate-300">display: none</div>
            <div className="text-[10px] text-slate-500 mt-0.5">افکت‌ها همچنان روشن‌ان</div>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2.5 rounded-xl border border-emerald-400/70 bg-slate-900 flex items-center justify-center">
              <i className="ti ti-check text-emerald-400 text-lg" aria-hidden="true" />
            </div>
            <div className="text-xs font-semibold text-slate-300">Activity</div>
            <div className="text-[10px] text-slate-500 mt-0.5">state می‌مونه، افکت خاموش</div>
          </div>

        </div>

        <div className="flex gap-3 border-t border-dashed border-slate-800 pt-5">
          <div className="flex-1 rounded-lg border border-emerald-400/25 bg-emerald-400/5 p-3.5 text-xs leading-6">
            <div className="font-bold text-emerald-400 mb-1">✓ mode="visible"</div>
            <div className="text-slate-400">
              رندر عادی، افکت‌ها اجرا می‌شن، DOM نمایش داده می‌شه.
            </div>
          </div>
          <div className="flex-1 rounded-lg border border-red-400/25 bg-red-400/5 p-3.5 text-xs leading-6">
            <div className="font-bold text-red-400 mb-1">◐ mode="hidden"</div>
            <div className="text-slate-400">
              DOM با <code className="text-sky-300 bg-black border border-slate-700 rounded px-1.5 py-0.5 text-[11px]">display: none</code> مخفی می‌شه، افکت‌ها cleanup می‌شن، state حفظ می‌شه.
            </div>
          </div>
        </div>
      </div>

      {/* Section 01 */}
      <div className="mb-11">
        <div className="flex items-baseline gap-2.5 mb-3.5">
          <span className="text-xs text-indigo-400 font-medium">01</span>
          <span className="text-lg font-bold text-black">فرق Activity با رندر شرطی</span>
        </div>
        <p className="text-sm leading-8 text-black mb-3">
          وقتی با یک تِرنری یک کامپوننت رو حذف می‌کنید، React کل ساب‌تری رو
          unmount می‌کنه — همه‌ی <code className="text-sky-300 bg-black border border-slate-700 rounded px-1.5 py-0.5 text-xs">useState</code> ها ریست می‌شن و DOM از بین می‌ره.
          Activity این کار رو نمی‌کنه؛ فقط ظاهر رو مخفی و افکت‌ها رو متوقف می‌کنه، ولی
          حافظه‌ی کامپوننت (Fiber) سرجاش می‌مونه.
        </p>

        <div className="bg-black border border-slate-800 rounded-xl p-5 font-mono text-[13px] leading-7 overflow-x-auto text-left" dir="ltr">
          <div><span className="text-purple-400">import</span> {"{"} Activity {"}"} <span className="text-purple-400">from</span> <span className="text-emerald-400">'react'</span></div>
          <div className="text-slate-600">{"// "}تب فعال visible می‌مونه، بقیه hidden</div>
          <div><span className="text-purple-400">function</span> <span className="text-fuchsia-400">Tabs</span>({"{"} active {"}"}) {"{"}</div>
          <div>&nbsp;&nbsp;<span className="text-purple-400">return</span> (</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;{"<>"}</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&lt;Activity</span> mode={"{"}active === <span className="text-emerald-400">'chat'</span> ? <span className="text-emerald-400">'visible'</span> : <span className="text-emerald-400">'hidden'</span>{"}"}<span className="text-amber-400">&gt;</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&lt;Chat</span> <span className="text-amber-400">/&gt;</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-amber-400">&lt;/Activity&gt;</span></div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;{"</>"}</div>
          <div>&nbsp;&nbsp;)</div>
          <div>{"}"}</div>
        </div>
        <p className="text-xs leading-7 text-slate-500 mt-2.5">
          وقتی کاربر از تب چت خارج بشه، متن نصفه‌نوشته توی اینپوت هنوز همون‌جاست —
          چون کامپوننت واقعاً unmount نشده، فقط پنهانه.
        </p>
      </div>

      {/* Section 02 */}
      <div className="mb-11">
        <div className="flex items-baseline gap-2.5 mb-3.5">
          <span className="font-mono text-xs text-indigo-400 font-medium">02</span>
          <span className="text-lg font-bold text-black">مسئولیتی که خودتون باید بردارید: side effect ها</span>
        </div>
        <p className="text-sm leading-8 text-black mb-3">
          Activity فقط DOM و state رو نگه می‌داره، افکت‌های جانبی (پخش ویدیو، اتصال
          WebSocket، تایمر) خودشون متوقف نمی‌شن مگه اینکه توی cleanup مدیریت‌شون کنید.
        </p>
        <div className="flex flex-col gap-2">
          <div className="flex items-start gap-2.5 bg-black border border-slate-800 rounded-lg px-4 py-3">
            <span className="font-mono text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 rounded px-1.5 py-0.5 mt-0.5 shrink-0">state</span>
            <span className="text-sm leading-7 text-slate-300">
              <b className="text-slate-100">حفظ می‌شه:</b> مقادیر useState، useReducer و متن تایپ‌شده در فرم‌ها بعد از hidden شدن باقی می‌مونن.
            </span>
          </div>
          <div className="flex items-start gap-2.5 bg-black border border-slate-800 rounded-lg px-4 py-3">
            <span className="font-mono text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 rounded px-1.5 py-0.5 mt-0.5 shrink-0">effect</span>
            <span className="text-sm leading-7 text-slate-300">
              <b className="text-slate-100">پاک می‌شه:</b> تابع cleanup هر useEffect اجرا می‌شه؛ برای ویدیو یا صدا باید صراحتاً pause کنید.
            </span>
          </div>
        </div>
      </div>

      {/* Section 03: pre-render */}
      <div className="mb-11">
        <div className="flex items-baseline gap-2.5 mb-3.5">
          <span className="font-mono text-xs text-indigo-400 font-medium">03</span>
          <span className="text-lg font-bold text-black">پیش‌رندر کردن یک تب که هنوز دیده نشده</span>
        </div>
        <p className="text-sm leading-8 text-black mb-3">
          اگه Activity از همون اول با mode="hidden" رندر بشه، بچه‌هاش نامرئی‌ان ولی همچنان
          با اولویت پایین رندر می‌شن — یعنی داده و کد لازم رو زودتر می‌گیرن، بدون
          اجرای افکت‌ها. وقتی بعداً visible بشه، دیگه منتظر لودینگ نمی‌مونید.
        </p>
        <div className="bg-black border border-slate-800 rounded-xl px-5 py-4 font-mono text-[13px] leading-8 text-left overflow-x-auto" dir="ltr">
          <div className="text-indigo-300 font-medium">mode: "hidden" (initial render)</div>
          <div className="text-slate-400 pr-5">↳ children render at low priority</div>
          <div className="text-emerald-400 pr-10">↳ data + code preload early</div>
          <div className="text-amber-400 pr-5">↳ Effects do <span className="text-slate-500">not</span> run yet</div>
        </div>
      </div>

      {/* Section 04: checklist */}
      <div className="mb-11">
        <div className="flex items-baseline gap-2.5 mb-3.5">
          <span className="font-mono text-xs text-indigo-400 font-medium">04</span>
          <span className="text-lg font-bold text-black">نکاتی که هنگام استفاده باید رعایت کنید</span>
        </div>
        <div className="flex flex-col gap-2.5">
          <div className="flex items-start gap-2.5 bg-black border border-slate-800 rounded-lg px-4 py-3.5">
            <span className="font-mono text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 rounded px-1.5 py-0.5 mt-0.5 shrink-0">key</span>
            <span className="text-sm leading-7 text-slate-300">
              اگه Activity ها رو داخل یک لوپ می‌سازید، حتماً <b className="text-slate-100">key</b> پایدار بدید؛ چون حفظ state بر اساس موقعیت در tree انجام می‌شه.
            </span>
          </div>
          <div className="flex items-start gap-2.5 bg-black border border-slate-800 rounded-lg px-4 py-3.5">
            <span className="font-mono text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 rounded px-1.5 py-0.5 mt-0.5 shrink-0">video</span>
            <span className="text-sm leading-7 text-slate-300">
              تگ‌هایی مثل <b className="text-slate-100">video</b>، <b className="text-slate-100">audio</b> و <b className="text-slate-100">iframe</b> حتی موقع hidden هم به کارشون ادامه می‌دن؛ pause کردن با useLayoutEffect را خودتون مدیریت کنید.
            </span>
          </div>
          <div className="flex items-start gap-2.5 bg-black border border-slate-800 rounded-lg px-4 py-3.5">
            <span className="font-mono text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 rounded px-1.5 py-0.5 mt-0.5 shrink-0">security</span>
            <span className="text-sm leading-7 text-slate-300">
              از Activity برای «پنهان کردن» محتوای حساس مثل پنل ادمین استفاده نکنید — DOM همچنان در صفحه وجود داره.
            </span>
          </div>
          <div className="flex items-start gap-2.5 bg-black border border-slate-800 rounded-lg px-4 py-3.5">
            <span className="font-mono text-[11px] font-semibold text-indigo-400 bg-indigo-500/10 rounded px-1.5 py-0.5 mt-0.5 shrink-0">strict</span>
            <span className="text-sm leading-7 text-slate-300">
              با <b className="text-slate-100">StrictMode</b> تست کنید؛ کامپوننتی که زیر double-invoke افکت‌ها درست کار کنه، زیر چرخه‌ی hide/show هم درست کار می‌کنه.
            </span>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-slate-800 pt-6 text-sm leading-8 text-slate-500">
        خلاصه: <code className="text-sky-300 bg-black border border-slate-700 rounded px-1.5 py-0.5 text-xs">Activity</code> جای
        خالی بین «حذف کامل» و «مخفی کردن با CSS» رو پر می‌کنه — state و DOM رو نگه می‌داره
        ولی افکت‌ها رو خاموش می‌کنه، و برای تب‌ها، پنل‌های کناری و پیش‌رندر کردن مسیرهای بعدی
        بهترین گزینه‌ست.
      </div>

    </div>
  </div>
    </div>
  )
}

export default Activity