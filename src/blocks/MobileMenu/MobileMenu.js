import React from 'react';
import {Link} from "react-router-dom";
import './MobileMenu.scss';
import { Menu, Affix } from 'antd';

const MobileMenu = () => {
    return (
        <Affix className="mobile-menu-container" style={{ position: 'fixed', bottom: 0 }}>
            <Menu className="mobile-menu" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                    <Link to="/">
                        <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78261 0.630493L0 8.23919V20.1957C0 20.7723 0.229037 21.3252 0.636724 21.7329C1.04441 22.1406 1.59736 22.3696 2.17391 22.3696H17.3913C17.9679 22.3696 18.5208 22.1406 18.9285 21.7329C19.3362 21.3252 19.5652 20.7723 19.5652 20.1957V8.23919L9.78261 0.630493ZM6.52174 11.5001V22.3696H13.0435V11.5001H6.52174Z" fill="#066FD9"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.78261 0.630493L0 8.23919V20.1957C0 20.7723 0.229037 21.3252 0.636724 21.7329C1.04441 22.1406 1.59736 22.3696 2.17391 22.3696H6.52174V11.5001H13.0435V22.3696H17.3913C17.9679 22.3696 18.5208 22.1406 18.9285 21.7329C19.3362 21.3252 19.5652 20.7723 19.5652 20.1957V8.23919L9.78261 0.630493Z" fill="#066FD9"/>
                        </svg>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link to="/edu">
                        <svg width="42" height="25" viewBox="0 0 42 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path d="M34.3528 16.0256H33.1311C32.8017 16.0256 32.5354 16.2919 32.5354 16.6213C32.5354 16.9507 32.8017 17.217 33.1311 17.217H34.3528C34.6822 17.217 34.9485 16.9507 34.9485 16.6213C34.9485 16.2919 34.6822 16.0256 34.3528 16.0256Z" stroke="#7E8494" stroke-width="1.2"/>
                                <path d="M39.6314 16.0768H38.4097C38.0803 16.0768 37.814 16.343 37.814 16.6724C37.814 17.0019 38.0803 17.2681 38.4097 17.2681H39.6314C39.9608 17.2681 40.2271 17.0019 40.2271 16.6724C40.2271 16.343 39.9608 16.0768 39.6314 16.0768Z" stroke="#7E8494" stroke-width="1.2"/>
                                <path d="M36.4401 17.4153C36.1107 17.4153 35.8445 17.6815 35.8445 18.011V19.2327C35.8445 19.5621 36.1107 19.8283 36.4401 19.8283C36.7695 19.8283 37.0358 19.5621 37.0358 19.2327V18.011C37.0358 17.6815 36.7695 17.4153 36.4401 17.4153Z" stroke="#7E8494" stroke-width="1.2"/>
                                <path d="M36.4293 15.6975C36.7587 15.6975 37.025 15.4313 37.025 15.1019V8.20344C37.025 7.95505 36.8707 7.73287 36.6384 7.6453L19.6285 1.28834C19.4939 1.23771 19.3456 1.23771 19.2115 1.28834L2.20226 7.6459C1.97233 7.73227 1.81865 7.95029 1.81507 8.1957C1.8121 8.44112 1.95923 8.6639 2.18677 8.75563L7.94509 11.0912V20.2854C7.94509 22.6662 13.8964 23.7504 19.426 23.7504C24.9556 23.7504 30.9069 22.6662 30.9069 20.2854V11.2312L33.971 10.0274C34.2778 9.90765 34.4285 9.56157 34.3075 9.25539C34.1878 8.94862 33.8417 8.79792 33.5356 8.91884L19.423 14.4609L4.0518 8.22608L19.42 2.48146L35.8342 8.61684V15.1019C35.8336 15.4313 36.1005 15.6975 36.4293 15.6975ZM19.42 15.6975C19.4939 15.6975 19.5678 15.6838 19.638 15.6564L29.7161 11.6982V20.2848C29.7161 21.0568 26.0844 22.5584 19.4266 22.5584C12.7688 22.5584 9.13702 21.0568 9.13702 20.2848V11.5743L19.1961 15.6541C19.2675 15.6832 19.3438 15.6975 19.42 15.6975Z" stroke="#7E8494" stroke-width="1.2"/>
                            </g>
                        </svg>
                    </Link>
                </Menu.Item>
                <Menu.Item key="3">
                    <Link to="/news">
                        <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path d="M15.3681 13.5002H24.8152C25.3675 13.5002 25.8152 13.0525 25.8152 12.5002V10.5002C25.8152 9.94796 25.3675 9.50024 24.8152 9.50024H16.3681C15.8158 9.50024 15.3681 9.94796 15.3681 10.5002V13.5002Z" stroke="#7E8494" stroke-width="2"/>
                                <path d="M12.2622 13.5002V10.5002C12.2622 9.94796 11.8145 9.50024 11.2622 9.50024H2.81522C2.26293 9.50024 1.81522 9.94796 1.81522 10.5002V12.5002C1.81522 13.0525 2.26293 13.5002 2.81522 13.5002H12.2622Z" stroke="#7E8494" stroke-width="2"/>
                                <path d="M15.4288 25.5002C15.4288 26.0525 15.8765 26.5002 16.4288 26.5002H23.8152C24.3675 26.5002 24.8152 26.0525 24.8152 25.5002V14.5002C24.8152 13.948 24.3675 13.5002 23.8152 13.5002H15.4288V25.5002Z" stroke="#7E8494" stroke-width="2"/>
                                <path d="M11.2021 26.5002C11.7544 26.5002 12.2021 26.0525 12.2021 25.5002V13.5002H3.81522C3.26293 13.5002 2.81522 13.948 2.81522 14.5002V25.5002C2.81522 26.0525 3.26293 26.5002 3.81522 26.5002H11.2021Z" stroke="#7E8494" stroke-width="2"/>
                                <mask id="path-4-outside-1" maskUnits="userSpaceOnUse" x="5.05089" y="0.0065918" width="10" height="9" fill="black">
                                    <rect fill="white" x="5.05089" y="0.0065918" width="10" height="9"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.88184 3.0747C8.11579 2.70223 8.44449 2.52091 8.88669 2.52091C10.1024 2.52091 12.1033 3.97242 12.8878 7.07189C10.7585 7.14891 8.59497 6.20347 7.83922 4.8714C7.49742 4.26838 7.5118 3.66409 7.88184 3.0747ZM13.8082 5.10884C12.7921 2.84092 10.9981 1.00659 8.88724 1.00659C7.90936 1.00659 7.08684 1.45861 6.57145 2.27931C5.90506 3.34016 5.87758 4.52298 6.49415 5.6101C7.49027 7.3664 10.012 8.59265 12.6272 8.59265C12.9626 8.59265 13.4801 8.56589 13.8082 8.52548"/>
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.88184 3.0747C8.11579 2.70223 8.44449 2.52091 8.88669 2.52091C10.1024 2.52091 12.1033 3.97242 12.8878 7.07189C10.7585 7.14891 8.59497 6.20347 7.83922 4.8714C7.49742 4.26838 7.5118 3.66409 7.88184 3.0747ZM13.8082 5.10884C12.7921 2.84092 10.9981 1.00659 8.88724 1.00659C7.90936 1.00659 7.08684 1.45861 6.57145 2.27931C5.90506 3.34016 5.87758 4.52298 6.49415 5.6101C7.49027 7.3664 10.012 8.59265 12.6272 8.59265C12.9626 8.59265 13.4801 8.56589 13.8082 8.52548" fill="#7E8494"/>
                                <path d="M7.88184 3.0747L7.6278 2.91514L7.62777 2.91518L7.88184 3.0747ZM12.8878 7.07189L12.8987 7.3717L13.2698 7.35828L13.1787 6.99828L12.8878 7.07189ZM7.83922 4.8714L7.57822 5.01933L7.57829 5.01944L7.83922 4.8714ZM6.57145 2.27931L6.82548 2.43889L6.8255 2.43886L6.57145 2.27931ZM6.49415 5.6101L6.2332 5.7581L6.2332 5.7581L6.49415 5.6101ZM8.13589 3.23426C8.31465 2.94965 8.54714 2.82091 8.88669 2.82091V2.22091C8.34184 2.22091 7.91692 2.45481 7.6278 2.91514L8.13589 3.23426ZM8.88669 2.82091C9.3876 2.82091 10.1199 3.12931 10.8368 3.84623C11.5458 4.55524 12.2169 5.64382 12.597 7.14551L13.1787 6.99828C12.7743 5.4005 12.0527 4.21359 11.2611 3.42198C10.4774 2.63827 9.60146 2.22091 8.88669 2.22091V2.82091ZM12.877 6.77209C11.858 6.80895 10.8294 6.60067 9.96837 6.22508C9.10255 5.8474 8.4352 5.31391 8.10015 4.72336L7.57829 5.01944C7.99899 5.76096 8.79127 6.36622 9.72848 6.77503C10.6704 7.18592 11.7883 7.41186 12.8987 7.3717L12.877 6.77209ZM8.10021 4.72347C7.81309 4.21691 7.82422 3.73068 8.13592 3.23422L7.62777 2.91518C7.19938 3.5975 7.18175 4.31984 7.57822 5.01933L8.10021 4.72347ZM14.082 4.98617C13.0498 2.68246 11.179 0.706592 8.88724 0.706592V1.30659C10.8172 1.30659 12.5344 2.99939 13.5345 5.2315L14.082 4.98617ZM8.88724 0.706592C7.8073 0.706592 6.88828 1.21069 6.31739 2.11977L6.8255 2.43886C7.2854 1.70653 8.01142 1.30659 8.88724 1.30659V0.706592ZM6.31741 2.11973C5.5925 3.27375 5.56202 4.57469 6.2332 5.7581L6.7551 5.4621C6.19315 4.47127 6.21762 3.40658 6.82548 2.43889L6.31741 2.11973ZM6.2332 5.7581C7.29857 7.63651 9.94083 8.89265 12.6272 8.89265V8.29265C10.0832 8.29265 7.68196 7.09629 6.7551 5.4621L6.2332 5.7581ZM12.6272 8.89265C12.9723 8.89265 13.5023 8.86541 13.8449 8.82323L13.7716 8.22773C13.4578 8.26636 12.9529 8.29265 12.6272 8.29265V8.89265Z" fill="#7E8494" mask="url(#path-4-outside-1)"/>
                                <mask id="path-6-outside-2" maskUnits="userSpaceOnUse" x="12.5115" y="0.0057373" width="10" height="9" fill="black">
                                    <rect fill="white" x="12.5115" y="0.0057373" width="10" height="9"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6799 3.07486C19.4459 2.70239 19.1172 2.52108 18.675 2.52108C17.4594 2.52108 15.4584 3.97258 14.6739 7.07206C16.8032 7.14908 18.9668 6.20363 19.7225 4.87157C20.0643 4.26854 20.0499 3.66425 19.6799 3.07486ZM13.7541 5.10798C14.7703 2.84007 16.5642 1.00574 18.6751 1.00574C19.653 1.00574 20.4755 1.45775 20.9909 2.27846C21.6573 3.33931 21.6848 4.52213 21.0682 5.60924C20.0721 7.36554 17.5503 8.5918 14.9351 8.5918C14.5997 8.5918 14.0823 8.56503 13.7541 8.52463"/>
                                </mask>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6799 3.07486C19.4459 2.70239 19.1172 2.52108 18.675 2.52108C17.4594 2.52108 15.4584 3.97258 14.6739 7.07206C16.8032 7.14908 18.9668 6.20363 19.7225 4.87157C20.0643 4.26854 20.0499 3.66425 19.6799 3.07486ZM13.7541 5.10798C14.7703 2.84007 16.5642 1.00574 18.6751 1.00574C19.653 1.00574 20.4755 1.45775 20.9909 2.27846C21.6573 3.33931 21.6848 4.52213 21.0682 5.60924C20.0721 7.36554 17.5503 8.5918 14.9351 8.5918C14.5997 8.5918 14.0823 8.56503 13.7541 8.52463" fill="#7E8494"/>
                                <path d="M19.6799 3.07486L19.9339 2.9153L19.934 2.91534L19.6799 3.07486ZM14.6739 7.07206L14.663 7.37186L14.2919 7.35844L14.3831 6.99845L14.6739 7.07206ZM19.7225 4.87157L19.9835 5.0195L19.9834 5.01961L19.7225 4.87157ZM20.9909 2.27846L20.7369 2.43803L20.7368 2.438L20.9909 2.27846ZM21.0682 5.60924L21.3291 5.75724L21.3291 5.75725L21.0682 5.60924ZM19.4258 3.23442C19.2471 2.94981 19.0146 2.82108 18.675 2.82108V2.22108C19.2199 2.22108 19.6448 2.45497 19.9339 2.9153L19.4258 3.23442ZM18.675 2.82108C18.1741 2.82108 17.4418 3.12948 16.7249 3.84639C16.016 4.5554 15.3448 5.64398 14.9647 7.14567L14.3831 6.99845C14.7875 5.40066 15.5091 4.21375 16.3006 3.42214C17.0843 2.63843 17.9603 2.22108 18.675 2.22108V2.82108ZM14.6847 6.77225C15.7037 6.80911 16.7323 6.60084 17.5934 6.22524C18.4592 5.84757 19.1265 5.31407 19.4616 4.72353L19.9834 5.01961C19.5627 5.76112 18.7705 6.36638 17.8332 6.7752C16.8913 7.18608 15.7734 7.41202 14.663 7.37186L14.6847 6.77225ZM19.4615 4.72364C19.7486 4.21708 19.7375 3.73084 19.4258 3.23438L19.934 2.91534C20.3623 3.59766 20.38 4.32001 19.9835 5.0195L19.4615 4.72364ZM13.4803 4.98532C14.5125 2.6816 16.3833 0.705737 18.6751 0.705737V1.30574C16.7451 1.30574 15.028 2.99854 14.0279 5.23065L13.4803 4.98532ZM18.6751 0.705737C19.755 0.705737 20.6741 1.20984 21.245 2.11891L20.7368 2.438C20.2769 1.70567 19.5509 1.30574 18.6751 1.30574V0.705737ZM21.2449 2.11888C21.9698 3.27289 22.0003 4.57384 21.3291 5.75724L20.8072 5.46124C21.3692 4.47042 21.3447 3.40572 20.7369 2.43803L21.2449 2.11888ZM21.3291 5.75725C20.2638 7.63565 17.6215 8.8918 14.9351 8.8918V8.2918C17.4792 8.2918 19.8804 7.09544 20.8072 5.46124L21.3291 5.75725ZM14.9351 8.8918C14.59 8.8918 14.0601 8.86456 13.7174 8.82238L13.7908 8.22688C14.1045 8.2655 14.6095 8.2918 14.9351 8.2918V8.8918Z" fill="#7E8494" mask="url(#path-6-outside-2)"/>
                            </g>
                        </svg>
                    </Link>
                </Menu.Item>
                <Menu.Item key="4">
                    <Link to="/card">
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.8">
                                <path d="M12.7507 14.9888H11.5228C5.90509 14.9888 2.13089 18.2153 2.13089 23.0183C2.13089 23.3858 2.4292 23.6841 2.79677 23.6841C3.16433 23.6841 3.46265 23.3858 3.46265 23.0183C3.46265 18.0748 7.80451 16.3205 11.5228 16.3205H12.7507C16.4692 16.3205 20.8114 18.0751 20.8114 23.0183C20.8114 23.3858 21.1098 23.6841 21.4773 23.6841C21.8449 23.6841 22.1432 23.3858 22.1432 23.0183C22.1432 18.2153 18.3687 14.9888 12.7507 14.9888Z" fill="#7E8494" stroke="#7E8494" stroke-width="0.8"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1228 13.9371C15.6082 13.9371 18.4336 11.1117 18.4336 7.62638C18.4336 4.14107 15.6082 1.31567 12.1228 1.31567C8.63753 1.31567 5.81213 4.14107 5.81213 7.62638C5.81213 11.1117 8.63753 13.9371 12.1228 13.9371Z" stroke="#7E8494" stroke-width="2"/>
                            </g>
                        </svg>
                    </Link>
                </Menu.Item>
            </Menu>
        </Affix>
    );
};

export default MobileMenu;