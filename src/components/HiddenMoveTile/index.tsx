'use client';

import { TileLayout, TileRound, TileInput } from "./styles";
import { ENUM_EXTRA_FEATURE } from "@/lib/enums";

export interface HiddenMove {
  index: number;
  onChange: any;
  extraFeature?: ENUM_EXTRA_FEATURE;
}

const getExtraFeature = (extraFeature?: ENUM_EXTRA_FEATURE) => {
  switch (extraFeature) {
    case ENUM_EXTRA_FEATURE.DRAW_CARD:
      return <span>+</span>;
    case ENUM_EXTRA_FEATURE.NUM_PLAYERS_END_CONDITION_4P:
      return "4J";
    case ENUM_EXTRA_FEATURE.NUM_PLAYERS_END_CONDITION_23P:
      return "2/3J";
    default:
      return <></>;
  }
}

export default function HiddeMoveTile({ index, onChange, extraFeature }: HiddenMove) {
  return <TileLayout key={index}>
    <TileRound>{index}</TileRound>
    <TileInput onChange={onChange} maxLength={3} />
    {getExtraFeature(extraFeature)}
  </TileLayout>;
}