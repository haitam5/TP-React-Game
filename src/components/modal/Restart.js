import React, { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { ModalContext } from "../../context/ModalContext";

const Restart = () => {
    const { hideModal } = useContext(ModalContext);
    const { handleReset } = useContext(GameContext);
    return (
        <div className="restart">
            <h3 className="restart__title">Restart The Game?</h3>
            <div className="restart__btns">
                <button className="btn btn-sm" onClick={hideModal}>
                    Maybe latter
                </button>
                <button className="btn btn-yellow btn-sm" onClick={handleReset}>
                    Yessssss
                </button>
            </div>
        </div>
    );
};

export default Restart;
