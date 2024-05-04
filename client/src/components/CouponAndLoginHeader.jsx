import { useEffect, useRef, useState } from "react";
import { FaFolder } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";


const CouponAndLoginHeader = ({ login, coupon, h3Text, spanText }) => {
    const [loginToggle, setLoginToggle] = useState(false)
    const [couponToggle, setCouponToggle] = useState(false)
    const [alert, setAlert] = useState(false)
    const [noUser, setNoUser] = useState(false)
    const emailInput = useRef(null)
    const passwordInput = useRef(null)
    const refs = [emailInput, passwordInput]
    const loginInputs = [
        { id: 1, label: 'Username or email ', type: 'email' },
        { id: 2, label: 'Password ', type: 'password' }
    ]

    const handleFormSubmit = (e) => {
        const emailInputValue = emailInput.current.value
        const passwordInputValue = passwordInput.current.value
        if (emailInputValue && passwordInputValue) {
            e.preventDefault()
            const userData = JSON.parse(localStorage.getItem('userData'))
            if (userData && userData?.email === emailInputValue && userData?.password === passwordInputValue) {
                setAlert(true)
                refs.forEach(item => item.current.value = '')
                console.log('gg');
            } else {
                console.log("dd");
                setNoUser(true)
            }
        }
    }

    useEffect(() => {
        let alertTime;
        let noUserAlertTime;
        if (alert) {
            alertTime = setTimeout(() => setAlert(false), 1500);
        }
        if (noUser) {
            noUserAlertTime = setTimeout(() => setNoUser(false), 1500);
        }
        return () => {
            clearTimeout(alertTime);
            clearTimeout(noUserAlertTime);
        };
    }, [alert, noUser])


    return (
        <div className='md:w-6/12 w-full'>
            <h3 className="font-quicksand flex items-center bg-[#f6f6f6] border-t-[3px] border-[#96ae004d] text-14 font-semibold mb-[25px] py-[1em] pr-[2em] pl-[3.5em] relative w-auto">
                <FaFolder className="text-[#6f7172] absolute left-[15px]" />
                {h3Text}
                <span className="text-[#6f7172] cursor-pointer font-medium ml-[3px]"
                    onClick={() => login ? setLoginToggle(prev => !prev) : setCouponToggle(prev => !prev)}>
                    {spanText}</span>
            </h3>
            {login && (
                <div className={`${loginToggle ? 'block' : 'hidden'} border-1 border-[#eaedff] mb-20 p-30`}>
                    <div>
                        <p className="font-jost text-16 text-link-color leading-[23px] mb-[15px]">
                            Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.
                        </p>
                        <form className="relative">
                            {alert || noUser ? (
                                <>
                                    <div className='tooltip absolute bottom-[110%] left-[50%] -translate-x-[50%]  p-8 font-jost text-16 rounded-[3px] bg-white text-gray-10 border-1 border-heading-secondary w-max'>
                                        <span className='block'>
                                            {alert && 'You have successfully logged in'}
                                            {noUser && 'Sorry, there is no account that matches the data you entered, Please Sign Up first'}
                                        </span>
                                    </div>
                                    <IoMdArrowDropdown fontSize={45} className='text-heading-secondary absolute bottom-[99%] left-[50%] translate-x-[-50%]' />
                                </>
                            ) : null}
                            {loginInputs.map(({ id, label, type }, i) => (
                                <div key={id} className="font-jost text-16">
                                    <label className="block text-[#6f7172]">
                                        {label}
                                        <span className="text-theme-2 font-bold">*</span>
                                    </label>
                                    <input ref={refs[i]} required type={type} className="mb-[14px] h-[45px] max-w-full pl-10 w-full " style={{ border: '1px solid #eaedff' }} />
                                </div>
                            ))}
                            <div className="font-jost text-16 flex items-center justify-between">
                                <button type="submit" className="bg-heading-secondary hover:bg-heading-primary text-center text-white font-semibold rounded-[50px] inline-block text-13 uppercase py-[13px] px-[53px] transition-all"
                                    onClick={handleFormSubmit}>
                                    LOGIN
                                </button>
                                <div className="ml-[15px] text-[#6f7172] flex items-center gap-4">
                                    <input type="checkbox" />
                                    Remember me
                                </div>
                            </div>
                            <a href="https://github.com/AbdellahGo" target="_blank" className="text-[#6f6f6f] font-jost text-16 mt-[15px] block">Lost your password?</a>
                        </form>
                    </div>
                </div>
            )}
            {coupon && (
                <div className={`${couponToggle ? 'block' : 'hidden'} font-jost text-16`}>
                    <input readOnly type="text" placeholder="Coupon Code" className="h-[45px] px-[15px] w-full mb-[15px]" style={{ border: '1px solid #eaedff' }} />
                    <button className="bg-heading-secondary hover:bg-heading-primary text-center text-white font-semibold rounded-[50px] inline-block text-13 uppercase py-[13px] px-[53px] transition-all">Apply Coupon</button>
                </div>
            )}
        </div>
    )
}

export default CouponAndLoginHeader