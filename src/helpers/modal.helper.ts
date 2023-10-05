import { PayloadModal, useModal } from '@app/zustands/modal.zustand';

export const showErr = (payload: PayloadModal) =>
  useModal.getState().showError(payload);
