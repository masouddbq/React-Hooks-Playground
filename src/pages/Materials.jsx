import React, { Activity, useState, lazy, Suspense } from "react";
import Button from "../components/Button";
import { RiExpandLeftRightFill } from "react-icons/ri";
import Projects from "./Projects";

// Lazy Load Components
const Cleanup = lazy(() => import("../components/CleanUp"));
const PrivateRoute = lazy(() => import("../components/PrivateRoute"));
const ScrollRestore = lazy(() => import("../components/ScrollRestore"));
const ActivityDemo = lazy(() => import("../components/ActivityDemo"));

const Materials = () => {
  // اولین کامپوننتی که نمایش داده می‌شود
  const [activeKey, setActiveKey] = useState("cleanup");
  const [isListShow, setIsListShow] = useState(false);

  const materials = [
    { key: "cleanup", title: "کلین آپ", Component: Cleanup },
    { key: "privateRoute", title: "روت خصوصی", Component: PrivateRoute },
    {
      key: "scrollRestore",
      title: "بازگشت اسکرول",
      Component: ScrollRestore,
    },
    { key: "activity", title: "اکتیویتی", Component: ActivityDemo },
  ];

  // کامپوننت فعال
  const activeMaterial = materials.find(
    (item) => item.key === activeKey
  );

  const setActivate = (key) => {
    setActiveKey(key);
    setIsListShow((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-around w-full">
      {/* لیست دکمه‌ها */}
      <div className="z-10">
        <div
          className={
            isListShow
              ? "fixed -translate-x-[152px] md:-translate-x-12 w-[30vw] transition-all left-0 top-12 grid grid-cols-1 md:grid-cols-1 md:left-4 text-center mt-2 p-2 gap-0"
              : "fixed bg-white/80 border-[1px] border-b-0 border-indigo-100 shadow-md md:border-none md:shadow-none md:bg-transparent rounded-br-xl -translate-x-0 md:-translate-x-12 w-[30vw] transition-all left-0 top-12 grid grid-cols-1 md:grid-cols-1 md:left-4 text-center mt-2 p-2 gap-0"
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
              className={
                isListShow
                  ? "absolute md:hidden opacity-50 animate-bounce border-[1px] border-l-0 border-indigo-700 rounded-lg cursor-pointer text-indigo-800 text-2xl left-36 top-1/2"
                  : "absolute md:hidden bg-white/80 border-[1px] border-indigo-300 border-l-0 opacity-85 rounded-l-none rounded-lg cursor-pointer text-indigo-600 text-2xl -right-6 top-1/2"
              }
            />
          </div>
        </div>
      </div>

      {/* محتوای انتخاب شده */}
      <div
        className={
          !isListShow
            ? "blur-sm md:absolute md:top-12 md:blur-0 transition duration-300"
            : "flex transition duration-300 justify-center items-center md:absolute md:top-12 right-1 w-full md:right-auto"
        }
      >
        <Activity mode="visible">
          <Suspense fallback={<div>Loading...</div>}>
            {activeMaterial && <activeMaterial.Component />}
          </Suspense>
        </Activity>
      </div>
    </div>
  );
};

export default Materials;