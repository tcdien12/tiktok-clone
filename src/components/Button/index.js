import classNames from 'classnames/bind';
import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded,
    small = false,
    large = false,
    className,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let ComponentButton = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (disabled) {
        delete props.disabled;
    }
    if (href) {
        props.href = href;
        ComponentButton = 'a';
    } else if (to) {
        props.to = to;
        ComponentButton = Link;
    }
    const classNames = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        text,
        rounded,
        disabled,
        small,
        large,
    });
    return (
        <ComponentButton className={classNames} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </ComponentButton>
    );
}
export default Button;
