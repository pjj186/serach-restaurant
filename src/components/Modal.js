import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import styled from 'styled-components';
import MiniHeader from './MiniHeader';
import Location from './location';
import ResultLocation from './ResultLocation';

const ModalContainer = styled.div`
  background-color: rgba(15, 118, 110, 0.4);
`;

const Modal = ({ cancelModal, category }) => {
  const locContext = useContext(AppContext);
  const [res, setRes] = useState();
  const [isResult, setIsResult] = useState(false);

  const pickRes = () => {
    let pickIndex = Math.floor(Math.random() * locContext.currArr.length);
    setRes(locContext.currArr[pickIndex]);
    setIsResult(true);
    console.log(res);
  };

  const resetBtn = () => {
    setIsResult(false);
  };

  useEffect(() => {}, [isResult]);

  return (
    <ModalContainer className='w-full h-screen p-20 absolute -top-5 flex items-center justify-center'>
      <div className=' bg-neutral-200 w-1/2 h-full rounded-lg'>
        <MiniHeader cancelModal={cancelModal} category={category} />
        {!isResult ? (
          <div>
            <div>
              <p className=' text-3xl mt-3 mb-3 text-center'>
                주변에 이런 식당들이 있어요!
              </p>
              <div className='flex justify-center items-center pb-10 border-b-2 border-dashed'>
                <Location category={category} />
              </div>
            </div>
            {!locContext.loading ? (
              <div className='flex items-center justify-center'>
                <span
                  className='text-3xl border-2 border-solid mt-12 px-4 py-2 rounded-lg cursor-pointer shadow-lg hover:bg-slate-300'
                  onClick={pickRes}
                >
                  식당 뽑기!
                </span>
              </div>
            ) : null}
          </div>
        ) : (
          <div>
            <div>
              <p className=' text-3xl mt-3 mb-3 text-center'>여긴 어때요?</p>
              <div className='flex flex-col justify-center items-center pb-10 border-b-2 border-dashed'>
                {res === undefined ? (
                  <div className='w-[500px] h-[408px] flex items-center justify-center'>
                    <span>검색된 식당이 없어요.. 다른 식당을 찾아봐요!</span>
                  </div>
                ) : (
                  <>
                    <ResultLocation res={res.road_address_name} />
                    <span className='mt-4 font-bold text-3xl text-gray-900'>
                      {res.place_name}
                    </span>
                  </>
                )}
              </div>
            </div>
            <div className='flex items-center justify-center'>
              <span
                className='text-3xl border-2 border-solid mt-6 px-4 py-2 rounded-lg cursor-pointer shadow-lg hover:bg-slate-300'
                onClick={resetBtn}
              >
                다시 뽑기!
              </span>
            </div>
          </div>
        )}
      </div>
    </ModalContainer>
  );
};

export default Modal;
