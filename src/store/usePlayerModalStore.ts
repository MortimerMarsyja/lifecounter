import { create } from "zustand";
import { persist } from "zustand/middleware";
import { iModal } from "src/typings/ModalTypes/modal";
import { UUID } from "crypto";

export const modalInitialStore = {
  isOpen: false,
  playerId: "" as UUID,
} as iModal;

interface ModalPayload {
  val: boolean;
  playerId: UUID;
}

interface ModalState {
  modalData: iModal;
  setModalData: (modalData: ModalPayload) => void;
}

export const usePlayerModalStore = create<ModalState>()(
  persist(
    (set) => ({
      modalData: modalInitialStore,
      setModalData: ({ val, playerId }: ModalPayload) =>
        set((state) => ({
          modalData: {
            ...state.modalData,
            isOpen: val,
            playerId: playerId,
          },
        })),
    }),
    {
      name: "player-modal-storage",
    }
  )
);

export default usePlayerModalStore;
