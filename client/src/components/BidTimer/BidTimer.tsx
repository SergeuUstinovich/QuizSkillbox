import { useEffect, useState } from "react";
import { formatTime } from "../../helpers/formatTIme";
import { useTimer } from "../../provider/contexts/TimerProvider";
import style from "./BidTimer.module.scss";
import { Button } from "../../ui/Button";
import Modal from "../../ui/Modal/Modal";
import { FormDataPost } from "../FormDataPost/FormDataPost";
import { useUtm } from "../../provider/contexts/UtmContext";

export function BidTimer() {
  const { time, running } = useTimer();
  const [isOpen, setIsOpen] = useState(false);
  const utmData = useUtm();

  useEffect(() => {
    if (time === 600) {
      running();
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className={style.boxTimer}>
        <p className={style.timer}>{formatTime(time)}</p>
        <Button onClick={handleOpen} className={style.btn}>
          Оставить заявку
        </Button>
      </div>
      <Modal onClose={handleClose} isSpecial isOpen={isOpen} hiddenClose>
        <FormDataPost utmData={utmData?.utmData} />
      </Modal>
    </>
  );
}
