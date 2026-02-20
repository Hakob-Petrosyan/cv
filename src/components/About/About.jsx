import {useState} from "react";
import Ocean from '@/components/layout/Ocean/Ocean.jsx';
import './about.css';
import Button from "@/components/ui/Button/Button.jsx";
import MySlider from "@/components/ui/Slider/Slider.jsx";




export default function About(){

    const [activeTab, setActiveTab] = useState(0);


    const tabs = [
        "О себе",
        "Образование",
        "Карьера",
        "Навыки",
        "Опыт и проекты"
    ];

    return (
        <section className="container">
            <div className="about__block u-r-3">
                <Ocean/>
                <div className="about">
                    <div className="about-media">
                        <img className="main-image-styles" src="/src/assets/images/i/i1.webp" alt="Акоб Петросян — Frontend-разработчик"/>
                    </div>

                    <div className="about-panel u-p-3">
                        <div className="about-description border-style surface u-p-3 u-r-3 u-flex u-flex-col">
                            {
                                activeTab === 0 &&
                                <div className="about-content custom-scrollbar">
                                    <h2>О себе</h2>
                                    <ul className="u-flex u-flex-col u-gap-2">
                                        <li>
                                            Frontend-разработчик с более чем 4 годами коммерческого опыта.
                                            Принял участие в 100+ проектах, 30+ из которых реализовал полностью с нуля —
                                            от работы с макетами
                                            Figma до вывода в production.
                                        </li>
                                        <li>
                                            Специализируюсь на адаптивной pixel-perfect верстке, создании интерактивного
                                            функционала на JavaScript и интеграции интерфейсов в проекты на CMS
                                            (WordPress, Bitrix, MODX, OpenCart).
                                        </li>
                                        <li>
                                            В работе уделяю внимание архитектуре, чистоте и масштабируемости кода,
                                            кроссбраузерной совместимости и производительности.
                                            Развиваюсь в направлении React и компонентного подхода.
                                        </li>
                                    </ul>
                                </div>
                            }
                            {
                                activeTab === 1 &&
                                <div className="about-content custom-scrollbar">
                                    <h2>Образование</h2>

                                    <div className="grid-container education u-gap-3">
                                            <div
                                                className="education-card u-r-2 u-p-3 surface u-flex u-flex-col u-justify-between">
                                                <div className="u-flex u-justify-between ">
                                                    <h3 className="education-title">Инженер</h3>
                                                    <a className="diploma-doc  magnifier-icon u-flex "
                                                       href="/assets/images/main/diploma-m.webp"
                                                       data-fancybox='education-diploma'>
                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                             width="24" height="24"
                                                             viewBox="0 0 24 24"
                                                             fill="none"
                                                             stroke="currentColor"
                                                             stroke-width="1.5"
                                                             stroke-linecap="round"
                                                             stroke-linejoin="round"
                                                             className="lucide lucide-award">
                                                            <circle cx="12" cy="8" r="6"/>
                                                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
                                                        </svg>
                                                    </a>
                                                </div>
                                                <div className="education-card__bottom">
                                                    <div className="educational-institution">Политехнический университет
                                                    </div>
                                                    <div className="education-date"> 2002г. - 2007г.</div>
                                                </div>
                                            </div>

                                            <div
                                                className="education-card u-r-2 u-p-3 surface u-flex u-flex-col u-justify-between">
                                                <h3 className="education-title">Сетевой администратор</h3>
                                                <div className="education-card__bottom">
                                                    <div className="educational-institution">Cisco</div>
                                                    <div className="education-date">2009г.</div>
                                                </div>
                                            </div>

                                            <div
                                                className="education-card u-r-2 u-p-3 surface u-flex u-flex-col u-justify-between">
                                                <h3 className="education-title">Junior Frontend Developer</h3>
                                                <div className="education-card__bottom">
                                                    <div className="educational-institution">WebEx</div>
                                                    <div className="education-date">2020г-2021г.</div>
                                                </div>
                                            </div>

                                            <div
                                                className="education-card u-r-2 u-p-3 surface u-flex u-flex-col u-justify-between">
                                                <h3 className="education-title">Языки</h3>
                                                <ul className="education-languages">
                                                    <li>Армянский — родной</li>
                                                    <li>Русский — свободно</li>
                                                    <li>Английский — базовый (A2)</li>
                                                </ul>
                                            </div>
                                        </div>
                                </div>
                            }
                            {
                                activeTab === 2 &&
                                <div className="about-content experience-content">
                                    <div className="u-flex u-justify-between">
                                        <h2>Опыт работы</h2>
                                        <div className="u-flex u-gap-2">
                                            <button id="experience_slide_left"
                                                    className="slider-control-btn u-flex u-r-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2"
                                                     stroke-linecap="round" stroke-linejoin="round"
                                                     className="lucide lucide-move-left-icon lucide-move-left">
                                                    <path d="M6 8L2 12L6 16"/>
                                                    <path d="M2 12H22"/>
                                                </svg>
                                            </button>
                                            <button id="experience_slide_Right"
                                                    className="slider-control-btn u-flex u-r-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                     viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                     stroke-width="2"
                                                     stroke-linecap="round" stroke-linejoin="round"
                                                     className="lucide lucide-move-right-icon lucide-move-right">
                                                    <path d="M18 8L22 12L18 16"/>
                                                    <path d="M2 12H22"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <MySlider className="slider__experience" />
                                </div>

                            }
                            {
                                activeTab === 3 &&
                                <div className="about-content custom-scrollbar">
                                    <div className="skills grid-container u-gap-3">
                                            <fieldset className="skills__item u-p-3 u-r-3">
                                                <legend className="fontHalvarBreit ">Основной стек</legend>
                                                <ul className="skills__list">
                                                    <li>JavaScript</li>
                                                    <li>Vite</li>
                                                    <li>CSS</li>
                                                    <li>SCSS</li>
                                                    <li>HTML</li>
                                                    <li>Git</li>
                                                </ul>
                                            </fieldset>
                                            <fieldset className="skills__item u-p-3 u-r-3">
                                                <legend className="fontHalvarBreit">Базовый опыт</legend>
                                                <ul className="skills__list">
                                                    <li>React</li>
                                                    <li>Vue</li>
                                                    <li>Ajax</li>
                                                    <li>jQuery</li>
                                                    <li>PHP</li>
                                                    <li>Bootstrap</li>
                                                </ul>
                                            </fieldset>
                                            <fieldset className="skills__item u-p-3 u-r-3">
                                                <legend className="fontHalvarBreit">Знаком с&nbsp;основами</legend>
                                                <ul className="skills__list">
                                                    <li>Laravel</li>
                                                    <li>Yii2</li>
                                                    <li>MySQL</li>
                                                </ul>
                                            </fieldset>
                                            <fieldset className="skills__item u-p-3 u-r-3">
                                                <legend className="fontHalvarBreit">CMS-опыт</legend>
                                                <ul className="skills__list">
                                                    <li>Modx</li>
                                                    <li>Bitrix</li>
                                                    <li>WordPress</li>
                                                    <li>OpenCart</li>
                                                </ul>
                                            </fieldset>
                                    </div>
                                </div>
                            }
                            {
                                activeTab === 4 &&
                                <div className="about-content projects-content custom-scrollbar">
                                    <div data-container>
                                        <h2>Ключевые достижения</h2>

                                        <ul className="achievements-list">
                                            <li>100+ коммерческих проектов</li>
                                            <li>30+ проектов реализованы с нуля</li>
                                            <li>
                                                Опыт работы с проектами на CMS:
                                                внедрение и адаптация frontend-части,
                                                взаимодействие с backend-разработчиками,
                                                корректировка интерфейса после интеграции.
                                            </li>
                                        </ul>

                                        <div className="projects grid-container u-gap-3 u-p-3">
                                            <a href="https://www.lerden.ru/" target="_blank"
                                               className="btn-main fontHalvarBreit ">
                                                <span>lerden.ru</span>
                                                <span>Перейти на сайт</span>
                                            </a>

                                            <a href="https://axcap.ru/" target="_blank"
                                               className="btn-main fontHalvarBreit ">
                                                <span>axcap.ru</span>
                                                <span>Перейти на сайт</span>
                                            </a>

                                            <a href="https://xn--j1abip.com/" target="_blank"
                                               className="btn-main fontHalvarBreit ">
                                                <span>толк.com</span>
                                                <span>Перейти на сайт</span>
                                            </a>

                                            <a href="https://vorota37.ru/" className=" btn-main fontHalvarBreit"
                                               target="_blank" rel="noopener noreferrer">
                                                <span>vorota37.ru</span>
                                                <span>Перейти на сайт</span>
                                            </a>

                                            <a href="https://raoride.ru/" target="_blank"
                                               className="btn-main fontHalvarBreit ">
                                                <span>raoride.ru</span>
                                                <span>Перейти на сайт</span>
                                            </a>

                                            <a href="https://www.locautoplus.ru/" target="_blank"
                                               className="btn-main fontHalvarBreit ">
                                                <span>locautoplus.ru</span>
                                                <span>Перейти на сайт</span>
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <nav className="about-nav u-p-3 u-r-3">
                        <ul  className="u-flex about-panes">

                            {
                                tabs.map((tub, index) => (
                                    <li key={index} className="btn-main-wrapper"  >
                                        <Button
                                            active = {activeTab === index}
                                            onClick = {() => setActiveTab(index)}
                                        >
                                            <span>{tub}</span>
                                            <span>{tub}</span>
                                        </Button>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )
}