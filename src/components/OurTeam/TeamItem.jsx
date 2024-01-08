import { Image, ImgWrap, Svg, TeamSocial, TeamWrap, TextName } from "./TeamItem.styled";
import sprite from "../../images/SVG/symbol-defs.svg";

export const TeamItem = ({ item }) => {
    return (
        <TeamWrap>
            <ImgWrap>
                <Image src={item.image} alt="foto" width="94" height="94" />
            </ImgWrap>
            <div>
                <TextName>{item.name}</TextName>
                <TeamSocial>
                    <a href={item.linkedin} target="_blank" rel="noreferrer">
                        <Svg width="38" height="38">
                            <use xlinkHref={`${sprite}#icon-linkedin`} />
                        </Svg>
                    </a>
                    <a href={item.github} target="_blank" rel="noreferrer">
                        <Svg width="34" height="34">
                            <use xlinkHref={`${sprite}#icon-github`} />
                        </Svg>
                    </a>
                </TeamSocial>
            </div>
        </TeamWrap>
    )
};