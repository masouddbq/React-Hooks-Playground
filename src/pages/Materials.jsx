import React, { Activity, useState, lazy, Suspense } from "react";
import Button from "../components/Button";

// هر کامپوننت به‌صورت lazy لود میشه تا فقط وقتی نیاز شد ایمپورت بشه
const Cleanup = lazy(() => import("../components/CleanUp"));
const PrivateRoute = lazy(() => import("./PrivateRoute"));
const ScrollRestore = lazy(() => import("./ScrollRestore"));
const ActivityDemo = lazy(() => import("./ActivityDemo"));

const Materials = () => {
  const [activeKey, setActiveKey] = useState(null); // کلید گزینه‌ی انتخاب‌شده

  const materials = [
    { key: "cleanup", title: "Clean-up", Component: Cleanup },
    { key: "privateRoute", title: "PrivateRoute", Component: PrivateRoute },
    { key: "scrollRestore", title: "ScrollRestoration", Component: ScrollRestore },
    { key: "activity", title: "Activity", Component: ActivityDemo },
  ];

  return (
    <div className="flex items-center justify-around w-full">
      {/* لیست دکمه‌ها */}
      <div className="fixed left-0 top-12 border-r-2 grid grid-cols-1 md:grid-cols-1 md:left-4 text-center mt-2 p-4 gap-2">
        {materials.map((item) => (
          <Button key={item.key} onClick={() => setActiveKey(item.key)}>
            {item.title}
          </Button>
        ))}
      </div>

      {/* محتوای نمایشی کنار لیست */}
      <div className="flex justify-center items-center absolute top-12 right-10 w-[50vw] md:right-auto">
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
          <p className="text-gray-400">یک گزینه را انتخاب کنید</p>
        )}
      </div>
    </div>
  );
};

export default Materials;