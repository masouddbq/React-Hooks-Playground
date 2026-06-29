import React from 'react'

const Hooks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

  {/* useState */}
  <div className="flex flex-col gap-3 p-6 bg-white rounded-3xl shadow-md">
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center text-sm font-black">S</span>
      <span className="font-bold text-gray-800 text-lg">useState</span>
      <span className="mr-auto text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 text-blue-400">State</span>
    </div>
    <p className="text-sm text-right text-gray-500 leading-relaxed">
      یک مقدار رو داخل کامپوننت نگه میداره. هر بار که مقدار عوض بشه، کامپوننت دوباره رندر میشه و UI آپدیت میشه.
    </p>
    <div className="bg-gray-50 rounded-2xl p-4 font-mono text-xs text-gray-600 leading-relaxed">
      const [count, setCount] = useState(0);
    </div>
  </div>

  {/* useEffect */}
  <div className="flex flex-col gap-3 p-6 bg-white rounded-3xl shadow-md">
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-purple-50 text-purple-500 flex items-center justify-center text-sm font-black">E</span>
      <span className="font-bold text-gray-800 text-lg">useEffect</span>
      <span className="mr-auto text-xs font-semibold px-3 py-1 rounded-full bg-purple-50 text-purple-400">Side Effect</span>
    </div>
    <p className="text-sm text-right text-gray-500 leading-relaxed">
      بعد از رندر اجرا میشه. برای کارهایی مثل fetch از API، تایمر، یا تغییر title صفحه استفاده میشه. با cleanup میتونی وقتی کامپوننت حذف شد تایمر یا subscription رو متوقف کنی.
    </p>
    <div className="bg-gray-50 rounded-2xl p-4 font-mono text-xs text-gray-600 leading-relaxed">
      useEffect(() =&gt; {'{'} ... {'}'}, [dep]);
    </div>
  </div>

  {/* useRef */}
  <div className="flex flex-col gap-3 p-6 bg-white rounded-3xl shadow-md">
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center text-sm font-black">R</span>
      <span className="font-bold text-gray-800 text-lg">useRef</span>
      <span className="mr-auto text-xs font-semibold px-3 py-1 rounded-full bg-orange-50 text-orange-400">Ref</span>
    </div>
    <p className="text-sm text-right text-gray-500 leading-relaxed">
      دو کاربرد داره — اول دسترسی مستقیم به یک المان DOM مثل focus کردن input. دوم نگه داشتن یک مقدار که با تغییرش کامپوننت رندر مجدد نمیشه.
    </p>
    <div className="bg-gray-50 rounded-2xl p-4 font-mono text-xs text-gray-600 leading-relaxed">
      const ref = useRef(null);
    </div>
  </div>

  {/* useContext */}
  <div className="flex flex-col gap-3 p-6 bg-white rounded-3xl shadow-md">
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-green-50 text-green-500 flex items-center justify-center text-sm font-black">C</span>
      <span className="font-bold text-gray-800 text-lg">useContext</span>
      <span className="mr-auto text-xs font-semibold px-3 py-1 rounded-full bg-green-50 text-green-400">Context</span>
    </div>
    <p className="text-sm text-right text-gray-500 leading-relaxed">
      بدون prop drilling — مقادیر مشترک مثل theme یا اطلاعات کاربر رو یک بار تعریف میکنی و هر کامپوننتی توی درخت میتونه مستقیم بهش دسترسی داشته باشه.
    </p>
    <div className="bg-gray-50 rounded-2xl p-4 font-mono text-xs text-gray-600 leading-relaxed">
      const theme = useContext(ThemeCtx);
    </div>
  </div>

  {/* useReducer */}
  <div className="flex flex-col gap-3 p-6 bg-white rounded-3xl shadow-md">
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-red-50 text-red-500 flex items-center justify-center text-sm font-black">R</span>
      <span className="font-bold text-gray-800 text-lg">useReducer</span>
      <span className="mr-auto text-xs font-semibold px-3 py-1 rounded-full bg-red-50 text-red-400">State</span>
    </div>
    <p className="text-sm text-right text-gray-500 leading-relaxed">
      وقتی state پیچیده‌تر شد جایگزین useState میشه. یه action میفرستی، reducer اون رو میگیره و state جدید میسازه. مثل Redux ساده.
    </p>
    <div className="bg-gray-50 rounded-2xl p-4 font-mono text-xs text-gray-600 leading-relaxed">
      const [state, dispatch] = useReducer(reducer, 0);
    </div>
  </div>

  {/* useMemo */}
  <div className="flex flex-col gap-3 p-6 bg-white rounded-3xl shadow-md">
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-yellow-50 text-yellow-500 flex items-center justify-center text-sm font-black">M</span>
      <span className="font-bold text-gray-800 text-lg">useMemo</span>
      <span className="mr-auto text-xs font-semibold px-3 py-1 rounded-full bg-yellow-50 text-yellow-400">Performance</span>
    </div>
    <p className="text-sm text-right text-gray-500 leading-relaxed">
      نتیجه یک محاسبه سنگین رو cache میکنه. فقط وقتی dependency عوض بشه دوباره محاسبه میکنه، نه در هر رندر — باعث بهبود performance میشه.
    </p>
    <div className="bg-gray-50 rounded-2xl p-4 font-mono text-xs text-gray-600 leading-relaxed">
      const result = useMemo(() =&gt; compute(), [dep]);
    </div>
  </div>

  {/* useCallback */}
  <div className="flex flex-col gap-3 p-6 bg-white rounded-3xl shadow-md">
    <div className="flex items-center gap-3">
      <span className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center text-sm font-black">C</span>
      <span className="font-bold text-gray-800 text-lg">useCallback</span>
      <span className="mr-auto text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-400">Performance</span>
    </div>
    <p className="text-sm text-right text-gray-500 leading-relaxed">
      مثل useMemo ولی برای توابع — از ساخته شدن تابع جدید در هر رندر جلوگیری میکنه. وقتی تابع رو به کامپوننت فرزند پاس میدی خیلی مهمه.
    </p>
    <div className="bg-gray-50 rounded-2xl p-4 font-mono text-xs text-gray-600 leading-relaxed">
      const fn = useCallback(() =&gt; {'{'} ... {'}'}, [dep]);
    </div>
  </div>

</div>
  )
}

export default Hooks;