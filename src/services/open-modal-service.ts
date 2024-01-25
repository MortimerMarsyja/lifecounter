import { UUID } from "crypto";
import { SubjectManager } from "@utilities/subject-manager";

interface ModalData {
  playerId: UUID;
  isOpen: boolean;
}

const openModalService = new SubjectManager<ModalData>();

export default openModalService;
