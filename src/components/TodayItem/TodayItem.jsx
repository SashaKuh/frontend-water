import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
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
import { Modal } from 'components/Modal/Modal';
import sprite from '../../images/SVG/symbol-defs.svg';
import { deleteWaterOperation, getWaterOperation, getMonthWaterOperation } from '../../redux/water/waterOperations';
import { ButtonCancel, ButtonRed, ButtonsWrapper, SecondTitleModal } from '../Modal/Modal.styled';

const editIcon = `${sprite}#icon-pencil`;
const delIcon = `${sprite}#icon-trash`;
const glassIcon = `${sprite}#cup`;

const TodayItem = ({ id, water, date }) => {
  const dispatch = useDispatch();
  const time = `${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const openModal = (modalType) => () => {
    switch (modalType) {
      case 'edit':
        setEditModalOpen(true);
        break;
      case 'delete':
        setDeleteModalOpen(true);
        break;
      default:
        break;
    }
  };

  const closeModal = (modalType) => () => {
    switch (modalType) {
      case 'edit':
        setEditModalOpen(false);
        break;
      case 'delete':
        setDeleteModalOpen(false);
        break;
      default:
        break;
    }
  };

  const handleDelete = async () => {
    await dispatch(deleteWaterOperation(id));
    await dispatch(getWaterOperation(new Date()));
    await dispatch(getMonthWaterOperation(new Date()));
    setDeleteModalOpen(false);
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

      <EditModal modalIsOpen={isEditModalOpen} closeModal={closeModal('edit')} id={id} date={time} waterMl={water} />

      <Modal isOpen={isDeleteModalOpen} onRequestClose={closeModal('delete')} titleText="Delete Confirmation">
        <SecondTitleModal>Do you really want to delete this item?</SecondTitleModal>
        <ButtonsWrapper>
          <ButtonCancel onClick={closeModal('delete')}>Cancel</ButtonCancel>
          <ButtonRed onClick={handleDelete}>Delete</ButtonRed>
        </ButtonsWrapper>
      </Modal>
    </WaterItem>
  );
};

export default TodayItem;
