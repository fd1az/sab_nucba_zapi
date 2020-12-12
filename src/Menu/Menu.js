import React from 'react';
import styled from 'styled-components';

import { FoodGrid, FoodLabel, Food } from './FoodGrid';
import { TagCard, TagMenu, TagImg } from './TagsMenu';
import { Foods, arraySections } from '../data/data';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0px 400px 50px 20px;
  z-index: 3;
`;

export const Menu = () => {
  return (
    <MenuStyled>
      <h1>Menu</h1>
      <TagMenu>
        {arraySections.map((section) => (
          <TagCard>
            <TagImg img={section.imgTag} />
            <p>{section.section}</p>
          </TagCard>
        ))}
      </TagMenu>
      {Object.entries(Foods).map(([sectionName, arrayFoods]) => (
        <>
          <h3>{sectionName}</h3>
          <FoodGrid>
            {arrayFoods.map((food) => (
              <Food img={food.img}>
                <FoodLabel>
                  <div>{food.name}</div>
                </FoodLabel>
              </Food>
            ))}
          </FoodGrid>
        </>
      ))}
    </MenuStyled>
  );
};
