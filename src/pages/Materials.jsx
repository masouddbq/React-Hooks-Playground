import React, { Activity, useState, lazy, Suspense } from "react";
import Button from "../components/Button";
import { RiExpandLeftRightFill } from "react-icons/ri";

// هر کامپوننت به‌صورت lazy لود میشه تا فقط وقتی نیاز شد ایمپورت بشه
const Cleanup = lazy(() => import("../components/CleanUp"));
const PrivateRoute = lazy(() => import("../components/PrivateRoute"));
const ScrollRestore = lazy(() => import("../components/ScrollRestore"));
const ActivityDemo = lazy(() => import("../components/ActivityDemo"));

const Materials = () => {
  const [activeKey, setActiveKey] = useState(null); // کلید گزینه‌ی انتخاب‌شده
  const [isListShow, setIsListShow] = useState(false);

  const materials = [
    { key: "cleanup", title: "Clean-up", Component: Cleanup },
    { key: "privateRoute", title: "PrivateRoute", Component: PrivateRoute },
    {
      key: "scrollRestore",
      title: "ScrollRestoration",
      Component: ScrollRestore,
    },
    { key: "activity", title: "Activity", Component: ActivityDemo },
  ];

  const setActivate = (key) => {
    setActiveKey(key)
    setIsListShow(prev => !prev)
  }

  return (
    <div className="flex items-center justify-around w-full">
      {/* لیست دکمه‌ها */}
      <div className="z-10" >
        <div
          className={
            isListShow
              ? "fixed  -translate-x-36 md:-translate-x-12 w-[30vw] transition-all left-0 top-12 grid grid-cols-1 md:grid-cols-1 md:left-4 text-center mt-2 p-2 gap-0"
              : "fixed bg-white/80 md:bg-transparent rounded-br-xl -translate-x-0 md:-translate-x-12 w-[30vw] transition-all left-0 top-12 grid grid-cols-1 md:grid-cols-1 md:left-4 text-center mt-2 p-2 gap-0"
          }
        >
          {materials.map((item) => (
            <Button key={item.key} onClick={() => setActivate(item.key)}>
              {item.title}
            </Button>
          ))}
          <div>
            <RiExpandLeftRightFill
              onClick={() => setIsListShow((prev) => !prev)}
              className={isListShow ? "absolute md:hidden opacity-30 animate-bounce border-2 border-indigo-700 rounded-lg cursor-pointer text-indigo-800 text-2xl -right-6 top-1/2" : 
                "absolute md:hidden border-0 opacity-85 animate-pulse rounded-lg cursor-pointer text-indigo-600 text-2xl -right-6 top-1/2"
              }
            />
          </div>
        </div>
      </div>

      {/* محتوای نمایشی کنار لیست */}
      <div className={!isListShow ? `blur-sm md:absolute md:top-12 md:blur-0 transition duration-300` : `flex transition duration-300 justify-center items-center md:absolute md:top-12 right-1 w-full md:right-auto`}>
        {materials.map((item) => (
          <Activity
            key={item.key}
            mode={activeKey === item.key ? "visible" : "hidden"}
          >
            <Suspense fallback={<div>Loading...</div>}>
              <item.Component />
            </Suspense>
          </Activity>
        ))}

        {!activeKey && (
          <p className="text-gray-400 mt-10 hidden md:block">یک گزینه را انتخاب کنید</p>
        )}
      </div>
    </div>
  );
};

export default Materials;
