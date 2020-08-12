import React, { useState } from "react"
import aboutStyles from "../index.module.scss"
import BioModal from './Modal'


import { Icon } from 'react-icons-kit'
import { linkedin } from 'react-icons-kit/fa/linkedin'
import { plus } from 'react-icons-kit/fa/plus'

const MemberBio = (props) =>{
    const [show, setShow] = useState(false);
    const { profile } = props

    return(
        <div className={aboutStyles.employee}>
            <div className={aboutStyles.imgContainer}>
                <img alt={profile.image.title} src={profile.image.resize.src} fluid />
                {props.linkedin && <a href={profile.linkedin}><Icon className={aboutStyles.icon} size={24} icon={linkedin} /></a>}
                <Icon onClick={() => setShow(true)} className={aboutStyles.iconTwo} size={24} icon={plus} />
                <BioModal
                    show={show}
                    onHide={() => setShow(false)}
                >
                <div
                    dangerouslySetInnerHTML={{
                    __html: profile.bio.childMarkdownRemark.html,
                    }}
                />
                </BioModal>
            </div>
            <h2>{profile.name}</h2>
            <h3>{profile.position}</h3>
        </div>
    )
}

export default MemberBio