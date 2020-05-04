import React from 'react';
import './Header.scss';
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <Layout.Header className="header site-layout-background">
            <div className="logo" >
                <svg width={150} height={34} viewBox="0 0 150 34" fill="none">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.87 34c10.218 0 18-7.611 18-17s-7.782-17-18-17C9.655 0 .87 7.611.87 17s8.784 17 19 17z"
                        fill="#fff"
                    />
                    <mask
                        id="prefix__a"
                        maskUnits="userSpaceOnUse"
                        x={0}
                        y={0}
                        width={38}
                        height={34}
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M19.87 34c10.218 0 18-7.611 18-17s-7.782-17-18-17C9.655 0 .87 7.611.87 17s8.784 17 19 17z"
                            fill="#fff"
                        />
                    </mask>
                    <g mask="url(#prefix__a)" fillRule="evenodd" clipRule="evenodd">
                        <path
                            d="M.87 18s-.121-6.476 11-3c11.123 3.476 21.861 12.781 27 6 5.14-6.781 0-3 0-3s-1.3 1.682-4 1c-1.749-.442-4.296-1.368-8-4-9.412-6.691-16.382-10.009-24-8-7.616 2.009-2 11-2 11z"
                            fill="url(#prefix__paint0_radial)"
                        />
                        <path
                            d="M1.87 25s-1.14-7.432 10-3 14.993 7.577 26 3c11.009-4.577-5 5-5 5s-8.005 3.164-16 0c-7.994-3.164-7 6-7 6l-8-11z"
                            fill="url(#prefix__paint1_radial)"
                        />
                        <path
                            d="M7.87 3s8.906-4.351 17 2c8.096 6.351 8.125 10.012 17 12 8.877 1.988-11-17-11-17l-20-1-3 4z"
                            fill="url(#prefix__paint2_radial)"
                        />
                    </g>
                    <path
                        d="M61.35 13.08c1.346 0 2.413.4 3.2 1.2.8.787 1.2 1.973 1.2 3.56V24h-3.12v-5.68c0-.853-.18-1.487-.54-1.9-.347-.427-.847-.64-1.5-.64-.734 0-1.314.24-1.74.72-.427.467-.64 1.167-.64 2.1V24h-3.12v-5.68c0-1.693-.68-2.54-2.04-2.54-.72 0-1.294.24-1.72.72-.427.467-.64 1.167-.64 2.1V24h-3.12V13.24h2.98v1.24c.4-.453.886-.8 1.46-1.04a5.023 5.023 0 011.92-.36c.76 0 1.446.153 2.06.46a3.577 3.577 0 011.48 1.3c.44-.56.993-.993 1.66-1.3.68-.307 1.42-.46 2.22-.46zm17.98.16l-4.86 11.42c-.493 1.24-1.106 2.113-1.84 2.62-.72.507-1.593.76-2.62.76-.56 0-1.113-.087-1.66-.26-.546-.173-.993-.413-1.34-.72l1.14-2.22c.24.213.514.38.82.5.32.12.634.18.94.18.427 0 .774-.107 1.04-.32.267-.2.507-.54.72-1.02l.04-.1-4.66-10.84h3.22l3.02 7.3 3.04-7.3h3z"
                        fill="url(#prefix__paint3_linear)"
                    />
                    <path
                        d="M61.35 13.08c1.346 0 2.413.4 3.2 1.2.8.787 1.2 1.973 1.2 3.56V24h-3.12v-5.68c0-.853-.18-1.487-.54-1.9-.347-.427-.847-.64-1.5-.64-.734 0-1.314.24-1.74.72-.427.467-.64 1.167-.64 2.1V24h-3.12v-5.68c0-1.693-.68-2.54-2.04-2.54-.72 0-1.294.24-1.72.72-.427.467-.64 1.167-.64 2.1V24h-3.12V13.24h2.98v1.24c.4-.453.886-.8 1.46-1.04a5.023 5.023 0 011.92-.36c.76 0 1.446.153 2.06.46a3.577 3.577 0 011.48 1.3c.44-.56.993-.993 1.66-1.3.68-.307 1.42-.46 2.22-.46zm17.98.16l-4.86 11.42c-.493 1.24-1.106 2.113-1.84 2.62-.72.507-1.593.76-2.62.76-.56 0-1.113-.087-1.66-.26-.546-.173-.993-.413-1.34-.72l1.14-2.22c.24.213.514.38.82.5.32.12.634.18.94.18.427 0 .774-.107 1.04-.32.267-.2.507-.54.72-1.02l.04-.1-4.66-10.84h3.22l3.02 7.3 3.04-7.3h3z"
                        fill="url(#prefix__paint4_linear)"
                    />
                    <path
                        d="M61.35 13.08c1.346 0 2.413.4 3.2 1.2.8.787 1.2 1.973 1.2 3.56V24h-3.12v-5.68c0-.853-.18-1.487-.54-1.9-.347-.427-.847-.64-1.5-.64-.734 0-1.314.24-1.74.72-.427.467-.64 1.167-.64 2.1V24h-3.12v-5.68c0-1.693-.68-2.54-2.04-2.54-.72 0-1.294.24-1.72.72-.427.467-.64 1.167-.64 2.1V24h-3.12V13.24h2.98v1.24c.4-.453.886-.8 1.46-1.04a5.023 5.023 0 011.92-.36c.76 0 1.446.153 2.06.46a3.577 3.577 0 011.48 1.3c.44-.56.993-.993 1.66-1.3.68-.307 1.42-.46 2.22-.46zm17.98.16l-4.86 11.42c-.493 1.24-1.106 2.113-1.84 2.62-.72.507-1.593.76-2.62.76-.56 0-1.113-.087-1.66-.26-.546-.173-.993-.413-1.34-.72l1.14-2.22c.24.213.514.38.82.5.32.12.634.18.94.18.427 0 .774-.107 1.04-.32.267-.2.507-.54.72-1.02l.04-.1-4.66-10.84h3.22l3.02 7.3 3.04-7.3h3z"
                        fill="url(#prefix__paint5_linear)"
                    />
                    <path
                        d="M61.35 13.08c1.346 0 2.413.4 3.2 1.2.8.787 1.2 1.973 1.2 3.56V24h-3.12v-5.68c0-.853-.18-1.487-.54-1.9-.347-.427-.847-.64-1.5-.64-.734 0-1.314.24-1.74.72-.427.467-.64 1.167-.64 2.1V24h-3.12v-5.68c0-1.693-.68-2.54-2.04-2.54-.72 0-1.294.24-1.72.72-.427.467-.64 1.167-.64 2.1V24h-3.12V13.24h2.98v1.24c.4-.453.886-.8 1.46-1.04a5.023 5.023 0 011.92-.36c.76 0 1.446.153 2.06.46a3.577 3.577 0 011.48 1.3c.44-.56.993-.993 1.66-1.3.68-.307 1.42-.46 2.22-.46zm17.98.16l-4.86 11.42c-.493 1.24-1.106 2.113-1.84 2.62-.72.507-1.593.76-2.62.76-.56 0-1.113-.087-1.66-.26-.546-.173-.993-.413-1.34-.72l1.14-2.22c.24.213.514.38.82.5.32.12.634.18.94.18.427 0 .774-.107 1.04-.32.267-.2.507-.54.72-1.02l.04-.1-4.66-10.84h3.22l3.02 7.3 3.04-7.3h3z"
                        fill="#1897FB"
                    />
                    <path
                        d="M87.444 13.08c1.333 0 2.406.4 3.22 1.2.826.8 1.24 1.987 1.24 3.56V24h-3.12v-5.68c0-.853-.187-1.487-.56-1.9-.374-.427-.914-.64-1.62-.64-.787 0-1.414.247-1.88.74-.467.48-.7 1.2-.7 2.16V24h-3.12V9.16h3.12v5.2a4.042 4.042 0 011.5-.94 5.282 5.282 0 011.92-.34zm18.245 5.58c0 .04-.02.32-.06.84h-8.14a2.535 2.535 0 001.04 1.58c.547.387 1.227.58 2.04.58.56 0 1.053-.08 1.48-.24.44-.173.847-.44 1.22-.8l1.66 1.8c-1.013 1.16-2.493 1.74-4.44 1.74-1.213 0-2.287-.233-3.22-.7-.933-.48-1.653-1.14-2.16-1.98-.507-.84-.76-1.793-.76-2.86 0-1.053.247-2 .74-2.84a5.251 5.251 0 012.06-1.98c.88-.48 1.86-.72 2.94-.72 1.053 0 2.007.227 2.86.68a4.883 4.883 0 012 1.96c.493.84.74 1.82.74 2.94zm-5.58-3.22c-.707 0-1.3.2-1.78.6-.48.4-.773.947-.88 1.64h5.3c-.107-.68-.4-1.22-.88-1.62-.48-.413-1.067-.62-1.76-.62zm12.004-2.36c1.667 0 2.947.4 3.84 1.2.894.787 1.34 1.98 1.34 3.58V24h-2.92v-1.34c-.586 1-1.68 1.5-3.28 1.5-.826 0-1.546-.14-2.16-.42-.6-.28-1.06-.667-1.38-1.16a3.019 3.019 0 01-.48-1.68c0-1 .374-1.787 1.12-2.36.76-.573 1.927-.86 3.5-.86h2.48c0-.68-.206-1.2-.62-1.56-.413-.373-1.033-.56-1.86-.56-.573 0-1.14.093-1.7.28a4.347 4.347 0 00-1.4.72l-1.12-2.18c.587-.413 1.287-.733 2.1-.96a9.566 9.566 0 012.54-.34zm-.24 8.98c.534 0 1.007-.12 1.42-.36.414-.253.707-.62.88-1.1v-1.1h-2.14c-1.28 0-1.92.42-1.92 1.26 0 .4.154.72.46.96.32.227.754.34 1.3.34zm8.544-12.9h3.12V24h-3.12V9.16zm14.037 14.32a3.34 3.34 0 01-1.14.52c-.44.107-.907.16-1.4.16-1.28 0-2.273-.327-2.98-.98-.693-.653-1.04-1.613-1.04-2.88v-4.42h-1.66v-2.4h1.66v-2.62h3.12v2.62h2.68v2.4h-2.68v4.38c0 .453.113.807.34 1.06.24.24.573.36 1 .36.493 0 .913-.133 1.26-.4l.84 2.2zm8.591-10.4c1.334 0 2.407.4 3.22 1.2.827.8 1.24 1.987 1.24 3.56V24h-3.12v-5.68c0-.853-.186-1.487-.56-1.9-.373-.427-.913-.64-1.62-.64-.786 0-1.413.247-1.88.74-.466.48-.7 1.2-.7 2.16V24h-3.12V9.16h3.12v5.2a4.053 4.053 0 011.5-.94 5.285 5.285 0 011.92-.34z"
                        fill="#1D314F"
                    />
                    <defs>
                        <radialGradient
                            id="prefix__paint0_radial"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(14.68508 15.75024 -23.9052 22.28853 13.843 7.663)"
                        >
                            <stop stopColor="#25AAFF" />
                            <stop offset={1} stopColor="#10A3FF" />
                        </radialGradient>
                        <radialGradient
                            id="prefix__paint1_radial"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(13.8577 14.28126 -21.71897 21.0748 15.962 21.719)"
                        >
                            <stop stopColor="#25AAFF" />
                            <stop offset={1} stopColor="#10A3FF" />
                        </radialGradient>
                        <radialGradient
                            id="prefix__paint2_radial"
                            cx={0}
                            cy={0}
                            r={1}
                            gradientUnits="userSpaceOnUse"
                            gradientTransform="matrix(12.6021 16.8168 -24.55736 18.40269 20.715 .33)"
                        >
                            <stop stopColor="#25AAFF" />
                            <stop offset={1} stopColor="#10A3FF" />
                        </radialGradient>
                        <linearGradient
                            id="prefix__paint3_linear"
                            x1={35.306}
                            y1={-10.949}
                            x2={32.171}
                            y2={37.334}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#4DA1FF" />
                            <stop offset={1} stopColor="#097AE1" />
                        </linearGradient>
                        <linearGradient
                            id="prefix__paint4_linear"
                            x1={35.306}
                            y1={-10.949}
                            x2={32.171}
                            y2={37.334}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#1A93FC" />
                            <stop offset={1} stopColor="#02BBF1" />
                        </linearGradient>
                        <linearGradient
                            id="prefix__paint5_linear"
                            x1={127.037}
                            y1={16.879}
                            x2={95.534}
                            y2={79.142}
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#1A93FC" />
                            <stop offset={1} stopColor="#02BBF1" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
            <Menu mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <svg width={21} height={18} viewBox="0 0 21 18" fill="none">
                            <g
                                clipPath="url(#prefix__clip0)"
                                fill="#1D314F"
                                stroke="#1D314F"
                                strokeWidth={0.5}
                            >
                                <path d="M19.998 7.116L10.518.108a.515.515 0 00-.614 0L.424 7.116a.528.528 0 00-.113.734c.17.233.495.284.726.113l9.173-6.781 9.174 6.781a.514.514 0 00.726-.113.528.528 0 00-.112-.734z" />
                                <path d="M17.486 8.082a.522.522 0 00-.52.524v8.351h-4.157V12.4c0-1.447-1.166-2.623-2.599-2.623-1.432 0-2.598 1.176-2.598 2.623v4.559H3.455V8.606a.522.522 0 00-.52-.524.522.522 0 00-.52.524v8.876c0 .29.233.525.52.525h5.197a.521.521 0 00.52-.525V12.4c0-.868.699-1.574 1.558-1.574.86 0 1.56.706 1.56 1.574v5.083a.521.521 0 00.52.525h5.196c.287 0 .52-.235.52-.525V8.606a.522.522 0 00-.52-.524z" />
                            </g>
                            <defs>
                                <clipPath id="prefix__clip0">
                                    <path fill="#fff" d="M.175 0h20v18h-20z" />
                                </clipPath>
                            </defs>
                        </svg>
                        Главная
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/patients">
                        Пациенты
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/news">
                        Новости
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/edu">
                        Тестирование
                    </Link>
                </Menu.Item>
                <Menu.Item key="5">
                    <svg width={21} height={24} viewBox="0 0 21 24" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.817 5.149c1.582.33 4.67 1.484 5.166 5.517.209 1.696.222 2.944.233 3.97.018 1.699.03 2.793.907 4.308a6.704 6.704 0 001.274 1.556v.938H10.88c.064.191.1.396.1.608 0 1.064-.881 1.926-1.968 1.926-1.086 0-1.967-.862-1.967-1.926 0-.212.035-.417.1-.608H.624V20.5A6.732 6.732 0 001.9 18.944c.877-1.515.89-2.61.907-4.308.011-1.027.025-2.275.233-3.97.495-4.033 3.583-5.188 5.167-5.517h1.61z"
                            fill="#8CA0B3"
                        />
                        <g clipPath="url(#prefix__clip0)">
                            <rect
                                x={9.972}
                                y={1}
                                width={9}
                                height={9}
                                rx={4.5}
                                fill="url(#prefix__paint0_linear)"
                                stroke="#fff"
                                strokeWidth={2}
                            />
                        </g>
                        <defs>
                            <linearGradient
                                id="prefix__paint0_linear"
                                x1={20.277}
                                y1={0}
                                x2={13.938}
                                y2={-5.2}
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#FF7472" />
                                <stop offset={1} stopColor="#FC9F8D" />
                            </linearGradient>
                            <clipPath id="prefix__clip0">
                                <path fill="#fff" d="M8.972 0h11.393v11.393H8.972z" />
                            </clipPath>
                        </defs>
                    </svg>
                </Menu.Item>
                <Menu.Item key="6">
                    <img alt="врач" src='data:image/png;base64,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'/>
                </Menu.Item>
                <Menu.Item key="7">
                    <Link to="/admin">
                        <svg width={25} height={24} viewBox="0 0 25 24" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.21 9.767l-2.1-.462a4.28 4.28 0 00-.245-.715c-.102-.227-.207-.45-.317-.668l1.031-1.735c.203-.312.328-.671.375-1.078a1.226 1.226 0 00-.375-1.054L20.525 3a1.355 1.355 0 00-1.078-.41 2.208 2.208 0 00-1.102.34l-1.688 1.078a10.296 10.296 0 00-1.359-.563l-.422-1.969c-.078-.343-.258-.675-.539-.996A1.346 1.346 0 0013.283 0h-1.5c-.422 0-.758.16-1.008.48-.25.32-.414.66-.492 1.02L9.79 3.422a8.345 8.345 0 00-1.453.61L6.603 2.93c-.297-.204-.66-.317-1.09-.34-.43-.024-.785.113-1.066.41L3.368 4.055a1.256 1.256 0 00-.351 1.054c.047.407.164.766.351 1.078L4.47 8.015c-.094.204-.188.415-.281.633a5.504 5.504 0 00-.235.657l-1.922.421c-.359.063-.699.239-1.02.528a1.38 1.38 0 00-.48 1.066v1.5c0 .406.16.735.48.985.321.25.661.421 1.02.515l1.946.469c.062.219.136.426.222.621s.176.387.27.574l-1.102 1.828a2.662 2.662 0 00-.351 1.078c-.047.407.07.758.351 1.055L4.447 21c.28.297.636.433 1.066.41.43-.023.793-.137 1.09-.34l1.734-1.101c.235.125.477.238.727.34.25.101.5.19.75.269l.469 1.922c.093.36.265.7.515 1.02.25.32.578.48.985.48h1.5c.421 0 .777-.16 1.066-.48.289-.32.465-.66.527-1.02l.422-1.945c.25-.079.485-.165.703-.258.219-.094.438-.196.656-.305l1.688 1.078c.313.203.68.317 1.102.34.421.023.78-.113 1.078-.41l1.054-1.055c.297-.297.422-.648.375-1.055a2.465 2.465 0 00-.375-1.078l-1.03-1.734c.108-.203.206-.41.292-.621.086-.211.168-.434.246-.668l1.945-.469a2.8 2.8 0 001.02-.515c.32-.25.48-.579.48-.985v-1.5c0-.422-.16-.777-.48-1.066a2.127 2.127 0 00-.841-.487zm-.178 2.936a.406.406 0 01-.128.082l-.091.032-2.898.73-.258.773a11.45 11.45 0 01-.199.551l-.114.267-.507 1.01 1.477 2.438c.047.078.082.148.105.21a.478.478 0 01.035.165l-.984.984-.07-.026-.188-.091-2.46-1.57-.774.398a8.944 8.944 0 01-1.125.469l-.82.281-.61 2.79a.654.654 0 01-.082.187l-.062.093a.22.22 0 01-.02.024h-1.36a.408.408 0 01-.081-.129l-.033-.09-.73-2.875-.796-.258a6.388 6.388 0 01-.61-.222l-.304-.138-1.078-.554-2.461 1.57a.946.946 0 01-.152.083.39.39 0 01-.153.035l-.984-.961c0-.047.012-.102.035-.164a.758.758 0 01.105-.188l1.524-2.554-.352-.727a5.943 5.943 0 01-.246-.504 4.517 4.517 0 01-.176-.48l-.257-.797-2.743-.703a1.27 1.27 0 01-.234-.059.391.391 0 01-.14-.082V11.32c.01 0 .029-.007.057-.02l.048-.027a.86.86 0 01.152-.07l2.836-.633.258-.82c.047-.172.105-.344.176-.516l.156-.364.09-.198.375-.727-1.524-2.531a1.322 1.322 0 01-.105-.211.477.477 0 01-.035-.164l.984-.984.07.026.188.09 2.508 1.595.773-.399c.203-.11.407-.207.61-.293s.406-.16.609-.223l.797-.257.68-2.72a.834.834 0 01.07-.234.545.545 0 01.094-.14h1.383l.046.082a.69.69 0 01.07.176l.61 2.836.82.28c.204.048.399.114.586.2.188.086.375.176.563.27l.773.398 2.414-1.547a.557.557 0 01.305-.094l.984.961a.45.45 0 01-.035.141.756.756 0 01-.105.188l-1.477 2.46.375.75c.11.204.203.399.281.586.079.188.141.375.188.563l.258.82 2.789.633a.626.626 0 01.21.082l.095.063c.01.007.018.014.023.02l-.024 1.335zM12.532 7.5c-1.234 0-2.293.437-3.175 1.312-.883.875-1.325 1.938-1.325 3.188 0 1.25.442 2.312 1.325 3.187s1.941 1.313 3.176 1.313c1.25 0 2.316-.438 3.199-1.313S17.056 13.25 17.056 12c0-1.25-.442-2.313-1.324-3.188-.883-.875-1.95-1.312-3.2-1.312zm0 7.5a2.89 2.89 0 01-2.12-.879A2.89 2.89 0 019.531 12c0-.828.293-1.535.88-2.121a2.89 2.89 0 012.12-.88 2.89 2.89 0 012.122.88 2.89 2.89 0 01.879 2.12 2.89 2.89 0 01-.88 2.122 2.89 2.89 0 01-2.12.879z"
                                fill="#7C8C98"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M23.21 9.767l-2.1-.462a4.28 4.28 0 00-.245-.715c-.102-.227-.207-.45-.317-.668l1.031-1.735c.203-.312.328-.671.375-1.078a1.226 1.226 0 00-.375-1.054L20.525 3a1.355 1.355 0 00-1.078-.41 2.208 2.208 0 00-1.102.34l-1.688 1.078a10.296 10.296 0 00-1.359-.563l-.422-1.969c-.078-.343-.258-.675-.539-.996A1.346 1.346 0 0013.283 0h-1.5c-.422 0-.758.16-1.008.48-.25.32-.414.66-.492 1.02L9.79 3.422a8.345 8.345 0 00-1.453.61L6.603 2.93c-.297-.204-.66-.317-1.09-.34-.43-.024-.785.113-1.066.41L3.368 4.055a1.256 1.256 0 00-.351 1.054c.047.407.164.766.351 1.078L4.47 8.015c-.094.204-.188.415-.281.633a5.504 5.504 0 00-.235.657l-1.922.421c-.359.063-.699.239-1.02.528a1.38 1.38 0 00-.48 1.066v1.5c0 .406.16.735.48.985.321.25.661.421 1.02.515l1.946.469c.062.219.136.426.222.621s.176.387.27.574l-1.102 1.828a2.662 2.662 0 00-.351 1.078c-.047.407.07.758.351 1.055L4.447 21c.28.297.636.433 1.066.41.43-.023.793-.137 1.09-.34l1.734-1.101c.235.125.477.238.727.34.25.101.5.19.75.269l.469 1.922c.093.36.265.7.515 1.02.25.32.578.48.985.48h1.5c.421 0 .777-.16 1.066-.48.289-.32.465-.66.527-1.02l.422-1.945c.25-.079.485-.165.703-.258.219-.094.438-.196.656-.305l1.688 1.078c.313.203.68.317 1.102.34.421.023.78-.113 1.078-.41l1.054-1.055c.297-.297.422-.648.375-1.055a2.465 2.465 0 00-.375-1.078l-1.03-1.734c.108-.203.206-.41.292-.621.086-.211.168-.434.246-.668l1.945-.469a2.8 2.8 0 001.02-.515c.32-.25.48-.579.48-.985v-1.5c0-.422-.16-.777-.48-1.066a2.127 2.127 0 00-.841-.487zm-.178 2.936a.406.406 0 01-.128.082l-.091.032-2.898.73-.258.773a11.45 11.45 0 01-.199.551l-.114.267-.507 1.01 1.477 2.438c.047.078.082.148.105.21a.478.478 0 01.035.165l-.984.984-.07-.026-.188-.091-2.46-1.57-.774.398a8.944 8.944 0 01-1.125.469l-.82.281-.61 2.79a.654.654 0 01-.082.187l-.062.093a.22.22 0 01-.02.024h-1.36a.408.408 0 01-.081-.129l-.033-.09-.73-2.875-.796-.258a6.388 6.388 0 01-.61-.222l-.304-.138-1.078-.554-2.461 1.57a.946.946 0 01-.152.083.39.39 0 01-.153.035l-.984-.961c0-.047.012-.102.035-.164a.758.758 0 01.105-.188l1.524-2.554-.352-.727a5.943 5.943 0 01-.246-.504 4.517 4.517 0 01-.176-.48l-.257-.797-2.743-.703a1.27 1.27 0 01-.234-.059.391.391 0 01-.14-.082V11.32c.01 0 .029-.007.057-.02l.048-.027a.86.86 0 01.152-.07l2.836-.633.258-.82c.047-.172.105-.344.176-.516l.156-.364.09-.198.375-.727-1.524-2.531a1.322 1.322 0 01-.105-.211.477.477 0 01-.035-.164l.984-.984.07.026.188.09 2.508 1.595.773-.399c.203-.11.407-.207.61-.293s.406-.16.609-.223l.797-.257.68-2.72a.834.834 0 01.07-.234.545.545 0 01.094-.14h1.383l.046.082a.69.69 0 01.07.176l.61 2.836.82.28c.204.048.399.114.586.2.188.086.375.176.563.27l.773.398 2.414-1.547a.557.557 0 01.305-.094l.984.961a.45.45 0 01-.035.141.756.756 0 01-.105.188l-1.477 2.46.375.75c.11.204.203.399.281.586.079.188.141.375.188.563l.258.82 2.789.633a.626.626 0 01.21.082l.095.063c.01.007.018.014.023.02l-.024 1.335zM12.532 7.5c-1.234 0-2.293.437-3.175 1.312-.883.875-1.325 1.938-1.325 3.188 0 1.25.442 2.312 1.325 3.187s1.941 1.313 3.176 1.313c1.25 0 2.316-.438 3.199-1.313S17.056 13.25 17.056 12c0-1.25-.442-2.313-1.324-3.188-.883-.875-1.95-1.312-3.2-1.312zm0 7.5a2.89 2.89 0 01-2.12-.879A2.89 2.89 0 019.531 12c0-.828.293-1.535.88-2.121a2.89 2.89 0 012.12-.88 2.89 2.89 0 012.122.88 2.89 2.89 0 01.879 2.12 2.89 2.89 0 01-.88 2.122 2.89 2.89 0 01-2.12.879z"
                                fill="#6C7C93"
                            />
                        </svg>
                    </Link>
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
};

export default Header;