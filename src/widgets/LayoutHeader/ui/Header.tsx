import { useReducer, type FC } from "react"
import { ThemeSwitcher } from "../../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { Button } from "../../../shared/ui/Button/Button";
import { Modal } from "../../../shared/ui/Modal/Modal";
import { UserTabs } from "../../UserTabs/UserTabs";

export const LayoutHeader: FC = () => {
   const [isModalOpen, toggleModal] = useReducer(state => !state, false);

   return (
      <header>
         <ThemeSwitcher/>
         <UserTabs/>
         <Button onClick={toggleModal}>
            О проекте
         </Button>

         <Modal isOpen={isModalOpen} onClose={toggleModal}>
            <Modal.Header>
               <h2>О проекте</h2>
            </Modal.Header>

            <Modal.Body>
               <p>{`Modal Status: ${isModalOpen}`}</p>
            </Modal.Body>

            <Modal.Footer>
               <Button onClick={toggleModal}>Закрыть</Button>
            </Modal.Footer>
         </Modal>
      </header>
   )
}