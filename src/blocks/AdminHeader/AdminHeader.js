import React from 'react';
import './AdminHeader.scss';
import { Layout, Menu } from 'antd';
import {Link} from "react-router-dom";

const AdminHeader = () => {

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
                    <Link to="/admin">
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
                        Аналитика
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/patients">
                        Мед. Учреждения / Врачи
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
                    <img alt="админ" src='data:image/png;base64,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'/>
                </Menu.Item>
                <Menu.Item key="7">
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
                </Menu.Item>
            </Menu>
        </Layout.Header>
    );
};

export default AdminHeader;