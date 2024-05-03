import { Link } from "react-router-dom"

const SectionHeader = ({ refs, buttonStyles, sectionHeaderStyles,button, title, subTitle, desc, subTitleStyles, titleStyles, descStyles }) => {
    return (
        <div className={`${sectionHeaderStyles}`}>
            <h4  ref={refs && refs[0]} className={`${subTitleStyles}`}>{subTitle}</h4>
            <h1  ref={refs && refs[1]} className={`${titleStyles}`}>{title}</h1>
            <p ref={refs && refs[2]}  className={`${descStyles}`}>{desc}</p>
            {button && (
                <Link to='shop' ref={refs[3]}  className={`${buttonStyles}`}>Shop Now</Link>
            )}
        </div>
    )
}

export default SectionHeader