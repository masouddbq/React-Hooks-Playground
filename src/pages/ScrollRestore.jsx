import React from 'react'

const ScrollRestore = () => {
  return (
    <div>
          <div className="flex justify-center">
      <div className="flex flex-col items-center gap-6 p-8 bg-white rounded-3xl shadow-2xl w-80">
        {/* آیکون/عنوان */}
        <div className="flex flex-col items-center gap-1">
          <span className="text-5xl">📜</span>
          <span className="text-xl font-bold text-gray-800">
            ScrollRestoration
          </span>
          <span className="text-sm font-medium text-gray-400 tracking-widest uppercase">
            React Router
          </span>
        </div>

        {/* توضیحات */}
        <div className="flex flex-col gap-3 text-sm text-gray-600 leading-relaxed text-right">
          <p>
            وقتی بین صفحه‌ها جابه‌جا می‌شی، مرورگر به‌طور پیش‌فرض موقعیت اسکرول
            رو حفظ نمی‌کنه یا گاهی جای اشتباه نگهش می‌داره.
          </p>
          <p>
            کامپوننت{" "}
            <span className="font-semibold text-blue-500">
              ScrollRestoration
            </span>{" "}
            کاری می‌کنه وقتی به یه صفحه جدید می‌ری، اسکرول خودکار بره بالای
            صفحه، و وقتی با دکمه Back برمی‌گردی، دقیقاً همون نقطه‌ای که قبلاً
            بودی رو برات بازیابی کنه.
          </p>
        </div>

        {/* نکته کاربردی */}
        <div className="flex items-center gap-3 w-full">
          <div className="flex-1 rounded-2xl bg-blue-50 text-blue-500 text-xs font-bold text-center py-3 px-2">
            رفتن به صفحه جدید
            <br />
            اسکرول می‌ره بالا ↑
          </div>
          <div className="flex-1 rounded-2xl bg-orange-50 text-orange-500 text-xs font-bold text-center py-3 px-2">
            برگشت به عقب
            <br />
            موقعیت قبلی برمی‌گرده ↓
          </div>
        </div>

        {/* نحوه استفاده */}
        <div className="w-full bg-gray-50 rounded-2xl p-4">
          <code className="text-xs text-gray-500 font-mono block text-left" dir="ltr">
            {`<Root>`}
            <br />
            &nbsp;&nbsp;{`<Outlet />`}
            <br />
            &nbsp;&nbsp;{`<ScrollRestoration />`}
            <br />
            {`</Root>`}
          </code>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ScrollRestore