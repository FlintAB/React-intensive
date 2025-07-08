import { useReducer, type FC } from "react"
import { ThemeSwitcher } from "../../features/ThemeSwitcher/ui/ThemeSwitcher"
import { Modal } from "../../shared/ui/Modal/Modal";
import { Button } from "../../shared/ui/Button/Button";

export const LayoutHeader: FC = () => {
   const [isModalOpen, toggleModal] = useReducer(state => !state, false);

   return (
      <header>
         <ThemeSwitcher/>
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