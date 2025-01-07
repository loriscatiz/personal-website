import React from 'react'
import { ReactTyped } from 'react-typed'

interface TitleProps {
    tag: keyof JSX.IntrinsicElements // Limita i tag ai tipi validi in JSX
    className?: string
    text?: string
    hasReactType?: boolean
    loop?: boolean
    preText?: string
    preTextClassName?: string
    firstBr?: boolean
    postText?: string
    postTextClassName?: string
    secondBr?: boolean
    reactTypedStrings?: string[]
    typeSpeed?: number
    backSpeed?: number
    showCursor?: boolean
}

function Title({
    tag,
    className,
    text = '',
    hasReactType = false,
    loop = false,
    reactTypedStrings = [],
    typeSpeed = 50,
    backSpeed = 50,
    showCursor = false,
    preText = '',
    preTextClassName = '',
    firstBr = false,
    postText = '',
    postTextClassName = '',
    secondBr = false,
}: TitleProps) {
    if (hasReactType && reactTypedStrings.length > 0) {
        return React.createElement(
            tag,
            { className },
            <>
                <span className={preTextClassName}>{preText}</span>
                {firstBr && <br />}
                <ReactTyped
                    strings={reactTypedStrings}
                    typeSpeed={typeSpeed}
                    backSpeed={backSpeed}
                    showCursor={showCursor}
                    loop={loop}
                />
                {secondBr && <br />}
                <span className={postTextClassName}>{postText}</span>
            </>
        )
    }

    return React.createElement(tag, { className }, text)
}

export default Title
