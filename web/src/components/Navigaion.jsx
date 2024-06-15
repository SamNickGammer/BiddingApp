import {Link} from 'react-router-dom'

const Navigation = ({setOpenModalSignIn, setOpenModalSignUp}) => {
    return (
        <header className="bg-white border-b-2 border-b-blue-300 mb-[30px]">
            {/*<div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">*/}
            <div className="flex h-16 items-center justify-between">
                <div className="md:flex md:items-center md:gap-12">
                    <a className=" flex" href="#">
                        <p className="text-2xl font-bold font-mono mr-1  ">BidHub</p  >
                        <img className='h-8' src={require("../assets/logo/logo.png")} alt="BidHub" />
                    </a>
                </div>

                <div className="hidden md:block">
                    <nav aria-label="Global">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <Link to='/' className="text-gray-500 transition hover:text-gray-500/75"> Home </Link>
                            </li>
                            <li>
                                <Link to='/about'
                                      className="text-gray-500 transition hover:text-gray-500/75"> About </Link>
                            </li>
                            <li>
                                <Link to='/biding'
                                      className="text-gray-500 transition hover:text-gray-500/75"> Bid </Link>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <div className="sm:flex sm:gap-4">
                        <div
                            className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow cursor-pointer"
                            onClick={() => {
                                setOpenModalSignIn(true)
                            }}
                        >
                            Login
                        </div>

                        <div className="hidden sm:flex">
                            <div
                                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 cursor-pointer"
                                onClick={() => {
                                    setOpenModalSignUp(true)
                                }}
                            >
                                Register
                            </div>
                        </div>
                    </div>

                    <div className="block md:hidden">
                        <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/*</div>*/}
        </header>
    )
}

export default Navigation