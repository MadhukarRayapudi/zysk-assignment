import { CiCirclePlus } from "react-icons/ci";

import { CiCircleMinus } from "react-icons/ci";

import "./index.css"

const Faqs = (props) =>{
    const {faqDetails, showAnswerForId, activeFaqId} = props
    const onClickMinusOrPlusIcon = () =>{
        showAnswerForId(faqDetails.id)
    }

    const isActive = activeFaqId === faqDetails.id
    const icon = activeFaqId === faqDetails.id ? <CiCircleMinus /> : <CiCirclePlus />

    return(
        <>
          <hr />
          <li className = "each-faq">
              <h1 className = "faq-question"> {faqDetails.question} </h1>
              <button className = "minus-plus-icon-btn" onClick = {onClickMinusOrPlusIcon}>
                  {icon}
              </button>
          </li>
          {isActive && <p className = "faq-answer"> {faqDetails.answer} </p>}
        </>
    )
}

export default Faqs