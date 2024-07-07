'use client'

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { results } from './result';
import { result } from './result';


export const Omikuji = () => {
      const [randomResult, setRandomResult] = useState<result | null>(null);
      const numOmikuji: number = 10;

      const handleImageClick = (index: number) => {
            const randomIndex = Math.floor(Math.random() * results.length);
            setRandomResult(results[randomIndex]);
      };
      return (
            <div className='relative z-10'>
                  <h1 className='text-5xl text-center font-bold pt-8'>おみくじ</h1>
                  <div className='grid grid-cols-5 grid-rows-2 gap-8 pt-4'>
                        {/* Array.from({ length: num_omikuji }): num_omikujiの長さを持つ配列を生成
                        (_, index) => ( ... ): 生成された配列の各要素に対して実行される関数._は要素が入る場所で_は何もないことを示す慣習/indexは現在の要素のインデックス */}
                        {Array.from({ length: numOmikuji }, (_, index) => (
                              <div key={index} onClick={() => handleImageClick(index)} className="cursor-pointer">
                                    <Image
                                          // key={index}
                                          src="/omikuji.jpg"
                                          alt="Picture of the author"
                                          width={300}
                                          height={300}
                                          onClick={() => handleImageClick(index)}
                                    />
                              </div>
                        ))}
                  </div>
                  {randomResult !== null && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                        <div className="bg-white p-8 rounded">
                              <h1>{ randomResult.result }</h1>
                              <p>{ randomResult.description }</p>
                              <button 
                              onClick={() => setRandomResult(null)}
                              className="mt-4 bg-red-400 text-white px-6 py-2 rounded hover:bg-red-500"
                              >
                                    閉じる
                              </button>
                        </div>
                  </div>
                  )}
            </div>
            
      );
} 