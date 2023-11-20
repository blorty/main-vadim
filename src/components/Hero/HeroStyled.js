import styled from "styled-components";
import { motion } from "framer-motion";

export const HeroContainer = styled(motion.div)`
    background: ${({ theme }) => theme.card_light};
    display: flex;
    justify-content: center;
    position: relative;
    padding: 80px 30px;
    @media (max-width: 960px) {
        padding: 66px 16px;
    }
    @media (max-width: 640px) {
        padding: 32px 16px;
    }
    z-index: 1;

    clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
    `;

    export const HeroBg = styled.div`
    position: absolute;
    display: flex;
    justify-content: end;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 1360px;
    overflow: hidden;
    padding: 0 30px;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);

    @media (max-width: 960px) {
        justify-content: center;
        padding: 0 0px;
    }
    `;

    export const HeroInnerContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 960px) {
        flex-direction: column;
    }
    `;
    export const HeroLeftContainer = styled.div`
    width: 100%;
    order: 1;
    @media (max-width: 960px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    @media (max-width: 640px) {
        order: 2;
        margin-bottom: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    `;

    export const HeroRightContainer = styled.div`
    width: 100%;
    display: flex;
    order: 2;
    justify-content: end;
    gap: 12px;
    @media (max-width: 960px) {
        order: 1;
        justify-content: center;
        align-items: center;
        margin-bottom: 80px;
    }

    @media (max-width: 640px) {
        margin-bottom: 30px;
    }
    `;

    export const Img = styled(motion.img)`
    width: 100%;
    height: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.primary};

    cursor: grab; // Change the cursor to indicate the image can be dragged
        &:active {
    cursor: grabbing; // Change the cursor to grabbing when the image is being dragged
    
    @media (max-width: 768px) {
        max-width: 400px;
        max-height: 400px;
    }

    @media (max-width: 640px) {
        max-width: 280px;
        max-height: 280px;
    }
    `;

    export const Title = styled.div`
    font-weight: 700;
    font-size: 50px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 40px;
        line-height: 48px;
        margin-bottom: 8px;
    }
    `;

    export const TextLoop = styled.div`
    font-weight: 600;
    font-size: 32px;
    display: flex;
    gap: 12px;
    color: ${({ theme }) => theme.text_primary};
    line-height: 68px;
    @media (max-width: 960px) {
        text-align: center;
    }
    @media (max-width: 640px) {
        font-size: 22px;
        line-height: 48px;
        margin-bottom: 16px;
    }
    `;

    export const Span = styled.span`
    color: ${({ theme }) => theme.primary};
    cursor: pointer;
    `;

    export const SubTitle = styled(motion.div)`
    font-size: 20px;
    line-height: 32px;
    margin-bottom: 42px;
    color: ${({ theme }) => theme.text_primary + 95};

    @media (max-width: 960px) {
        text-align: center;
    }

    @media (max-width: 640px) {
        font-size: 16px;
        line-height: 32px;
    }
`;

export const ResumeButton = styled(motion.a)`
    appearance: none; // Removing browser-specific styling
    text-decoration: none;
    width: auto; // Adjust width to content size
    max-width: 300px;
    text-align: center;
    padding: 10px 20px; // Reduced padding
    color: ${({ theme }) => theme.white};
    border-radius: 25px; // Slightly increased border-radius for a smoother look
    cursor: pointer;
    font-size: 18px; // Slightly smaller font size
    font-weight: 600;
    background: linear-gradient(225deg, #613659 0%, #613659 100%);
    box-shadow: 0 2px 20px #C197D2; // Softer shadow
    display: inline-block; // Align to text size
    margin: 0; // Remove any default margin
    border: none; // Remove border
`;