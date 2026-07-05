import React, { useReducer } from "react";

const userReducer = (state , action) => {
    switch (action.type) {
        
        case 'firstName' : {
            return {
                ...state,
                firstName : action.value
            };
        }
        case 'lastName' : {
            return {
                ...state,
                lastName : action.value
            };
        }
        case 'email' : {
            return {
                ...state,
                email : action.value
            };
        }
        case 'phone' : {
            return {
                ...state,
                phone : action.value
            };
        }
        case 'username' : {
            return {
                ...state,
                username : action.value
            };
        }
        case 'password' : {
            return {
                ...state,
                password : action.value
            };
        }
        case 'confirmPassword' : {
            return {
                ...state,
                confirmPassword : action.value
            };
        }
        case 'birthDate' : {
            return {
                ...state,
                    birthDate : action.value
            };
        }
    
        default:
            return state;
    }
}

const FormUseReducer = () => {
  const [state, dispatch] = useReducer(userReducer, {
    firstName : "",
    lastName : "",
    email : "",
    phone : "",
    username : "",
    password : "",
    confirmPassword : "",
    birthDate : "",
  });

  return (
    <div>
      <form
        className="flex flex-col gap-4 max-w-md mx-auto p-6"
      >
        {/* نام */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="firstName"
            className="text-sm font-medium text-gray-700"
          >
            نام
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={state.firstName}
            onChange={(e) => dispatch({type : 'firstName' , value: e.target.value})}
            placeholder="مثلاً علی"
            className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* نام خانوادگی */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="lastName"
            className="text-sm font-medium text-gray-700"
          >
            نام خانوادگی
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={state.lastName}
            onChange={(e) => dispatch({type : 'lastName' , value: e.target.value})}
            placeholder="مثلاً رضایی"
            className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* ایمیل */}
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            ایمیل
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={state.email}
            onChange={(e) => dispatch({type : 'email' , value: e.target.value})}
            placeholder="example@mail.com"
            className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* شماره موبایل */}
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-medium text-gray-700">
            شماره موبایل
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={state.phone}
            onChange={(e) => dispatch({type : 'phone' , value: e.target.value})}
            placeholder="09xxxxxxxxx"
            className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* نام کاربری */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="username"
            className="text-sm font-medium text-gray-700"
          >
            نام کاربری
          </label>
          <input
            id="username"
            name="username"
            type="text"
            value={state.username}
            onChange={(e) => dispatch({type : 'username' , value: e.target.value})}
            placeholder="username123"
            className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* رمز عبور */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-gray-700"
          >
            رمز عبور
          </label>
          <input
            id="password"
            name="password"
            type="password"
            value={state.password}
            onChange={(e) => dispatch({type : 'password' , value: e.target.value})}
            placeholder="حداقل ۸ کاراکتر"
            className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* تکرار رمز عبور */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="confirmPassword"
            className="text-sm font-medium text-gray-700"
          >
            تکرار رمز عبور
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={state.confirmPassword}
            onChange={(e) => dispatch({type : 'confirmPassword' , value: e.target.value})}
            placeholder="رمز عبور رو دوباره وارد کن"
            className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* تاریخ تولد */}
        <div className="flex flex-col gap-1">
          <label
            htmlFor="birthDate"
            className="text-sm font-medium text-gray-700"
          >
            تاریخ تولد
          </label>
          <input
            id="birthDate"
            name="birthDate"
            type="date"
            value={state.birthDate}
            onChange={(e) => dispatch({type : 'birthDate' , value: e.target.value})}
            className="border rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <button
          type="submit"
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors"
        >
          ثبت‌نام
        </button>
      </form>
    </div>
  );
};

export default FormUseReducer;
