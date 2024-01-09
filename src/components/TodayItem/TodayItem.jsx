import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  WaterItem,
  WaterText,
  TimeText,
  ConfigIcons,
  ButtonPen,
  ButtonTrash,
  SvgPen,
  SvgTrash,
  CupIcon,
} from './TodayItem.styled';
import { EditModal } from '../EditModal/EditModal.jsx';
import { DeleteModal } from 'components/Modal/DeleteModal';
import sprite from '../../images/SVG/symbol-defs.svg';
import { deleteWaterOperation } from '../../redux/water/waterOperations';
import {
  ButtonCancel,
  ButtonRed,
  ButtonsWrapper,
  SecondTitleModal,
} from '../Modal/DeleteModal.styled';
import { selectModalDelete, selectModalEdit } from '../../redux/selectors';
import {
  closeModalDelete,
  closeModalEdit,
  openModalDelete,
  openModalEdit,
} from '../../redux/modal/modalSlice';

const editIcon = `${sprite}#icon-pencil`;
const delIcon = `${sprite}#icon-trash`;
const glassIcon = `${sprite}#cup`;

const TodayItem = ({ id, water, date }) => {
  const dispatch = useDispatch();
  const time = `${date.getHours()}:${date
    .getMinutes()
    .toString()
    .padStart(2, '0')}`;

  const isEditModalOpen = useSelector(selectModalEdit) === id;
  const isDeleteModalOpen = useSelector(selectModalDelete) === id;

  const openModal = modalType => () => {
    switch (modalType) {
      case 'edit':
        dispatch(openModalEdit(id));
        break;
      case 'delete':
        dispatch(openModalDelete(id));
        break;
      default:
        break;
    }
  };

  const closeModal = modalType => () => {
    switch (modalType) {
      case 'edit':
        dispatch(closeModalEdit());
        break;
      case 'delete':
        dispatch(closeModalDelete());
        break;
      default:
        break;
    }
  };

  const handleDelete = async () => {
    dispatch(deleteWaterOperation(id));
    dispatch(closeModalDelete());
  };

  return (
    <WaterItem>
      <CupIcon>
        <use href={glassIcon}></use>
      </CupIcon>
      <WaterText>{`${water} ml`}</WaterText>
      <TimeText>{time}</TimeText>

      <ConfigIcons>
        <ButtonPen onClick={openModal('edit')}>
          <SvgPen>
            <use href={editIcon}></use>
          </SvgPen>
        </ButtonPen>
        <ButtonTrash onClick={openModal('delete')}>
          <SvgTrash>
            <use href={delIcon}></use>
          </SvgTrash>
        </ButtonTrash>
      </ConfigIcons>

      <EditModal 
         modalIsOpen={isEditModalOpen}
         closeModal={closeModal('edit')}
         id={id}
         date={time}
         waterMl={water} />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onRequestClose={closeModal('delete')}
        titleText="Delete entry"
      >
        <SecondTitleModal>
        Are you sure you want to delete the entry?
        </SecondTitleModal>
        <ButtonsWrapper>
          <ButtonCancel onClick={closeModal('delete')}>Cancel</ButtonCancel>
          <ButtonRed onClick={handleDelete}>Delete</ButtonRed>
        </ButtonsWrapper>
      </DeleteModal>
    </WaterItem>
  );
};

export default TodayItem;
