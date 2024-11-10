import {Component} from "react"

import Faqs from "../Faqs"

import { FaArrowRight } from "react-icons/fa";

import { FiPlayCircle } from "react-icons/fi";

import { MdArrowOutward } from "react-icons/md";

import 'bootstrap/dist/css/bootstrap.min.css';

import "./index.css"

const faqList = [
    {id: 1, question: "Is there a free trial available?", answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.", isClicked: false},
    {id: 2, question: "Can I change my plan later?", answer: "you can...", isClicked: false},
    {id: 3, question: "What is your cancellation policy?", answer: "cancellation...", isClicked: false},
    {id: 4, question: "Can other info be added to an invoice?", answer: "Invoice in...", isClicked: false},
    {id: 5, question: "How does billing work?", answer: "Billing...", isClicked: false},
    {id: 6, question: "How do I change my account email?", answer: "Email...", isClicked: false},
]

class HomePage extends Component{
    state = {activeFaqId: 1}

    menuBtnClicked = () =>{
        this.setState(prevState=>({showMenu: !prevState.showMenu}))
    }

    showAnswerForId = (id) =>{
        this.setState({activeFaqId: id})
    }

    render(){
        const {activeFaqId} = this.state
        return(
        <div className = "home-page-container">
            {/* <nav className = "sm-navbar">
                <div className = "sm-img-and-heading-container">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731147853/Logomark_zjdeux.png" className = "logo" alt = "logo" onClick = {this.onClickLogo}/>
                    <h1 className = "company-name"> Untitled UI </h1>
                </div>
                <button className = "menu-btn" onClick = {this.menuBtnClicked}>
                    <RxHamburgerMenu />
                </button>
            </nav> */}

        <nav className="navbar bg-body-tertiary fixed-top navbar-sm">
        <div className="container-fluid">
            <div className = "img-and-heading-container">
            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731147853/Logomark_zjdeux.png" className = "logo" alt = "logo" onClick = {this.onClickLogo}/>
            <h1 className = "company-name"> Untitled UI </h1>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                    </a>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Action</a></li>
                    <li><a className="dropdown-item" href="#">Another action</a></li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    {/* <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                    </ul>
                </li>
                </ul>
            </div>
            </div>
        </div>
        </nav>

        <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-lg">
            <div className="container-fluid">
                <div className = "img-and-heading-container">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731147853/Logomark_zjdeux.png" className = "logo" alt = "logo" onClick = {this.onClickLogo}/>
                    <h1 className = "company-name"> Untitled UI </h1>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    <a className="nav-link dropdown" href="#">Products</a>
                    <a className="nav-link dropdown" href="#">Resources</a>
                    <a className="nav-link dropdown" href="#">Pricing</a>
                </div>
                </div>
            </div>
            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731155166/Avatar_widvn0.png" className = "avatar" alt = "avatar" />
        </nav>

        <div className = "page-except-navbar">
            <div className = "new-feature-btn-container">
                <button className = "new-feature-btn"> New feature </button>
                <p className = "goto-dashboard-text"> Check out the team dashboard </p>
                <button className = "arrow-btn" type = "button"> <FaArrowRight /> </button>
            </div>
            <h1 className = "smarter-heading"> Beautiful analytics to grow smarter </h1>
            <p className = "smarter-paragraph"> Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. </p>

            <div className = "buttons-container">
                <button className = "sign-up-btn"> Sign up </button>
                <button className = "demo-btn"> <FiPlayCircle /> Demo </button>
            </div>

            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731161152/Content_a2ewq6.png" className = "content-img" alt = "content" />

            <p className = "companies-count-paragraph"> Join 4,000+ companies already growing </p>
            <div className = "companies-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731162463/Fictional_company_logo_q2mu6c.png" className = "company-logo" alt = "boltshift" />

                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731162837/Fictional_company_logo_6_feads5.png" className = "company-logo" alt = "boltshift" />

                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731162528/Fictional_company_logo_2_grduch.png" className = "company-logo" alt = "boltshift" />

                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731162527/Fictional_company_logo_3_bjr0wt.png" className = "company-logo" alt = "boltshift" />

                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731162527/Fictional_company_logo_4_zgijwn.png" className = "company-logo" alt = "boltshift" />

                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731162527/Fictional_company_logo_5_hixvjn.png" className = "company-logo" alt = "boltshift" />
            </div>

            <hr />
            <p className = "features-heading"> Features </p>
            <p className = "features-section-heading"> Analytics that feels like it’s from the future </p>
            <p className = "feature-section-sub-heading"> Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. </p>
            
            <div className = "features-parent-container">
            <div className = "feature-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731164588/Featured_icon_mut5qp.png" className = "feature-img" alt = "feature" />
                <h1 className = "feature-heading"> Share team inboxes </h1>
                <p className = "feature-description"> Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop. </p>
            </div>

            <div className = "feature-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731164587/Featured_icon_1_dammmb.png" className = "feature-img" alt = "feature" />
                <h1 className = "feature-heading"> Deliver instant answers </h1>
                <p className = "feature-description"> An all-in-one customer service platform that helps you balance everything your customers need to be happy. </p>
            </div>

            <div className = "feature-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731165362/Featured_icon_5_vv5lyi.png" className = "feature-img" alt = "feature" />
                <h1 className = "feature-heading"> Manage your team with reports </h1>
                <p className = "feature-description"> Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks. </p>
            </div>

            <div className = "feature-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731164586/Featured_icon_2_zr572l.png" className = "feature-img" alt = "feature" />
                <h1 className = "feature-heading"> Connect with customers </h1>
                <p className = "feature-description"> Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion. </p>
            </div>

            <div className = "feature-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731164585/Featured_icon_3_xy2xyu.png" className = "feature-img" alt = "feature" />
                <h1 className = "feature-heading"> Connect the tools you already use </h1>
                <p className = "feature-description"> Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools. </p>
            </div>

            <div className = "feature-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731164585/Featured_icon_4_jqgin2.png" className = "feature-img" alt = "feature" />
                <h1 className = "feature-heading"> Our people make the difference </h1>
                <p className = "feature-description"> We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help. </p>
            </div>
            </div>

            <div className = "sisyphus-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731165670/Fictional_company_logo_7_guj3dt.png" className = "company-logo" alt = "sisyphus" />
                <h1 className = "sisyphus-description"> We’ve been using Untitled to kick start every new project and can’t imagine working without it. </h1>
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731166033/Avatar_1_xz5xyx.png" className = "candice-img" alt = "candice" />
                <p className = "feature-heading"> Candice Wu </p>
                <p className = "candice-role"> Product Manager, Sisyphus </p>
            </div>

            <p className = "features-colorful-heading"> Features </p>
            <h1 className = "sisyphus-description mb-3 mt-3"> Cutting-edge features for advanced analytics </h1>
            <p className = "feature-description mt-3 mb-3"> Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups. </p>
            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731166900/Content_1_xbwdk5.png" className = "mbl-content-img" alt = "content" />
            <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731215499/Content_2_o97jel.png" className = "mb-laptop-content-img" alt = "content" />

            <div className = "features-parent-container">
            <div className = "feature-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731164588/Featured_icon_mut5qp.png" className = "feature-img" alt = "feature" />
                <h1 className = "feature-heading"> Share team inboxes </h1>
                <p className = "feature-description"> Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop. </p>
                <button className = "learn-more-btn"> Learn More <FaArrowRight /> </button>
            </div>

            
                <div className = "feature-container">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731164587/Featured_icon_1_dammmb.png" className = "feature-img" alt = "feature" />
                    <h1 className = "feature-heading"> Deliver instant answers </h1>
                    <p className = "feature-description"> An all-in-one customer service platform that helps you balance everything your customers need to be happy. </p>
                    <button className = "learn-more-btn"> Learn More <FaArrowRight /> </button>
                </div>
            

            <div className = "feature-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731165362/Featured_icon_5_vv5lyi.png" className = "feature-img" alt = "feature" />
                <h1 className = "feature-heading"> Manage your team with reports </h1>
                <p className = "feature-description"> Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks. </p>
                <button className = "learn-more-btn"> Learn More <FaArrowRight /> </button>
            </div>
            </div>

            <hr />

            <ul className = "freq-asked-questions-container">
                <h1 className = "sisyphus-description text-center"> Frequently asked questions </h1>
                <p className = "feature-description text-center"> Everything you need to know about the product and billing. </p>

                {faqList.map((eachFaq)=>
                    <Faqs faqDetails = {eachFaq} showAnswerForId = {this.showAnswerForId} activeFaqId = {activeFaqId} key = {eachFaq.id}/>
                )}
            </ul>

            <div className = "have-questions-container">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731172970/Avatar_group_gbhaen.png" className = "have-questions-img" alt = "still have questions?" />
                <h1 className = "have-questions-heading"> Still have questions? </h1>
                <p className = "feature-description have-questions-description"> Can’t find the answer you’re looking for? Please chat to our friendly team. </p>
                <button className = "get-in-touch-btn"> Get in touch </button>
            </div>

            <p className = "our-blog-heading"> Our blog </p>

            <div className = "each-blog-container">
                <h1 className = "sisyphus-description latest-blog-heading"> Lastest blog posts </h1> 
                <p className = "our-blog-description"> Tool and strategies modern teams need to help their companies grow. </p>

                <div className = "blogs-mini-container">
                <div className = "each-blog">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731174375/Image_2_zhxaeo.png" alt = "mirror" className = "blog-img" />
                    <p className = "our-blog-heading blog-title"> Design </p>

                    <div className = "blog-name-and-arrow-container">
                        <h1 className = "blog-name"> UX review presentations </h1> 
                        <MdArrowOutward className = "arrow-icon"/>
                    </div>
                    <p className = "our-blog-description"> How do you create compelling presentations that wow your colleagues and impress your managers? </p>
                

                    <div className = "blog-writer-details">
                        <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731155166/Avatar_widvn0.png" className = "profile-pic" alt = "profile-pic" />
                        <div className = "writer-name-date-container">
                            <h1 className = "writer-name"> Olivia Rhye </h1>
                            <p className = "date"> 20 Jan 2024 </p>
                        </div>
                    </div>
                </div>

                <div className = "each-blog">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731174375/Image_2_zhxaeo.png" alt = "mirror" className = "blog-img" />
                <p className = "our-blog-heading blog-title"> Product </p>
                <div className = "blog-name-and-arrow-container">
                    <h1 className = "blog-name"> Migrating to Linear 101 </h1> 
                    <MdArrowOutward className = "arrow-icon"/>
                </div>
                <p className = "our-blog-description"> Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started. </p>

                <div className = "blog-writer-details">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731155166/Avatar_widvn0.png" className = "profile-pic" alt = "profile-pic" />
                    <div className = "writer-name-date-container">
                        <h1 className = "writer-name"> Olivia Rhye </h1>
                        <p className = "date"> 30 oct 2024 </p>
                    </div>
                </div>
                </div>

                <div className = "each-blog">
                <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731175979/Image_4_ayzbmm.png" alt = "mirror" className = "blog-img" />
                <p className = "our-blog-heading blog-title"> Software Engineering </p>
                <div className = "blog-name-and-arrow-container">
                    <h1 className = "blog-name"> Building your API stack </h1> 
                    <MdArrowOutward className = "arrow-icon"/>
                </div>
                <p className = "our-blog-description"> The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them. </p>

                <div className = "blog-writer-details">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731166033/Avatar_1_xz5xyx.png" className = "profile-pic" alt = "profile-pic" />
                    <div className = "writer-name-date-container">
                        <h1 className = "writer-name"> Candice Wu </h1>
                        <p className = "date"> 03 Apr 2024 </p>
                    </div>
                </div>
                </div>
                </div>

                <button className = "sign-up-btn"> View all posts </button>
            </div>

            <div className = "free-trail-container">
                    <h1 className = "sisyphus-description"> Start your free trail </h1>
                    <p className = "free-trail-description"> Join over 4,000+ startups already growing with Untitled. </p>
                    <div className = "get-started-and-learn-more-btn-container">
                    <button className = "sign-up-btn get-started-btn"> Get started </button>
                    <button className = "demo-btn mb-4"> Learn more </button>  
                    </div>
            </div>

            <div className = "about-us">
                <div className = "two-ul-containers">
                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Product </h1>
                    <li className = "about-us-item"> Overview </li>
                    <li className = "about-us-item"> Features </li>
                    <li className = "about-us-item"> Solutions </li>
                    <li className = "about-us-item"> Tutorials </li>
                    <li className = "about-us-item"> Pricing </li>
                    <li className = "about-us-item"> Releases </li>
                </ul>

                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Company </h1>
                    <li className = "about-us-item"> About us </li>
                    <li className = "about-us-item"> Careers </li>
                    <li className = "about-us-item"> Press </li>
                    <li className = "about-us-item"> News </li>
                    <li className = "about-us-item"> Media Kit </li>
                    <li className = "about-us-item"> Contact </li>
                </ul>
                </div>

                <div className = "two-ul-containers">
                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Resources </h1>
                    <li className = "about-us-item"> Blog </li>
                    <li className = "about-us-item"> Newsletter </li>
                    <li className = "about-us-item"> Events </li>
                    <li className = "about-us-item"> Help center </li>
                    <li className = "about-us-item"> Tutorials </li>
                    <li className = "about-us-item"> Support </li>
                </ul>

                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Use cases </h1>
                    <li className = "about-us-item"> Startups </li>
                    <li className = "about-us-item"> Enterprise </li>
                    <li className = "about-us-item"> Government </li>
                    <li className = "about-us-item"> SaaS center </li>
                    <li className = "about-us-item"> Marketplaces </li>
                    <li className = "about-us-item"> Ecommerce </li>
                </ul>
                </div>
                

                <div className = "two-ul-containers">
                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Social </h1>
                    <li className = "about-us-item"> Twitter </li>
                    <li className = "about-us-item"> LinkedIn </li>
                    <li className = "about-us-item"> Facebook </li>
                    <li className = "about-us-item"> GitHub </li>
                    <li className = "about-us-item"> AngelList </li>
                    <li className = "about-us-item"> Dribble </li>
                </ul>

                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Use cases </h1>
                    <li className = "about-us-item"> Terms </li>
                    <li className = "about-us-item"> Privacy </li>
                    <li className = "about-us-item"> Cookies </li>
                    <li className = "about-us-item"> Licenses </li>
                    <li className = "about-us-item"> Settings </li>
                    <li className = "about-us-item"> Contact </li>
                </ul>
            </div>
            </div>

            <div className = "about-us-lg">
                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Product </h1>
                    <li className = "about-us-item"> Overview </li>
                    <li className = "about-us-item"> Features </li>
                    <li className = "about-us-item"> Solutions </li>
                    <li className = "about-us-item"> Tutorials </li>
                    <li className = "about-us-item"> Pricing </li>
                    <li className = "about-us-item"> Releases </li>
                </ul>

                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Company </h1>
                    <li className = "about-us-item"> About us </li>
                    <li className = "about-us-item"> Careers </li>
                    <li className = "about-us-item"> Press </li>
                    <li className = "about-us-item"> News </li>
                    <li className = "about-us-item"> Media Kit </li>
                    <li className = "about-us-item"> Contact </li>
                </ul>

                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Resources </h1>
                    <li className = "about-us-item"> Blog </li>
                    <li className = "about-us-item"> Newsletter </li>
                    <li className = "about-us-item"> Events </li>
                    <li className = "about-us-item"> Help center </li>
                    <li className = "about-us-item"> Tutorials </li>
                    <li className = "about-us-item"> Support </li>
                </ul>

                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Use cases </h1>
                    <li className = "about-us-item"> Startups </li>
                    <li className = "about-us-item"> Enterprise </li>
                    <li className = "about-us-item"> Government </li>
                    <li className = "about-us-item"> SaaS center </li>
                    <li className = "about-us-item"> Marketplaces </li>
                    <li className = "about-us-item"> Ecommerce </li>
                </ul>

                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Social </h1>
                    <li className = "about-us-item"> Twitter </li>
                    <li className = "about-us-item"> LinkedIn </li>
                    <li className = "about-us-item"> Facebook </li>
                    <li className = "about-us-item"> GitHub </li>
                    <li className = "about-us-item"> AngelList </li>
                    <li className = "about-us-item"> Dribble </li>
                </ul>

                <ul className = "unordered-list">
                    <h1 className = "about-use-section-heading"> Use cases </h1>
                    <li className = "about-us-item"> Terms </li>
                    <li className = "about-us-item"> Privacy </li>
                    <li className = "about-us-item"> Cookies </li>
                    <li className = "about-us-item"> Licenses </li>
                    <li className = "about-us-item"> Settings </li>
                    <li className = "about-us-item"> Contact </li>
                </ul>
            </div>
            <hr />

            <div className = "footer">
                <div className = "logo-and-name-container">
                    <img src = "https://res.cloudinary.com/dqv0mp6k8/image/upload/v1731147853/Logomark_zjdeux.png" className = "footer-logo" alt = "logo" />
                    <h1 className = "company-name"> Untitled UI </h1> 
                </div>
                <p className = "mt-4 about-us-item"> © 2077 Untitled UI. All rights reserved. </p>
            </div>
        </div>
        </div>
        )
    }
}

export default HomePage