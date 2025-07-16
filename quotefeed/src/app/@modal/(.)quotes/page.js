import QuoteDetails from '@/component/QuoteDetails';
import Modal from '@/component/Modal';

function QuoteModal({ params: { id } }) {
  return;
  <Modal>
    <QuoteDetails id={id} />;
  </Modal>;
}

export default QuoteModal;
