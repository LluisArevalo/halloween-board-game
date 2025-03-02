'use client';

import Title from "@/components/Title";
import HiddeMoveTile from "@/components/HiddenMoveTile";
import { ENUM_EXTRA_FEATURE } from "@/lib/enums";

const plays = [{ extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: ENUM_EXTRA_FEATURE.DRAW_CARD }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: ENUM_EXTRA_FEATURE.DRAW_CARD }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: ENUM_EXTRA_FEATURE.DRAW_CARD }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: ENUM_EXTRA_FEATURE.NUM_PLAYERS_END_CONDITION_23P }, { extraFeature: undefined }, { extraFeature: ENUM_EXTRA_FEATURE.DRAW_CARD }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: undefined }, { extraFeature: ENUM_EXTRA_FEATURE.NUM_PLAYERS_END_CONDITION_4P }];

export default function Home() {
  const onChange = () => {
    console.log('changed');
  }

  return (
    <section>
      <Title />
      {plays.map((obj, index) => (
        <HiddeMoveTile index={index} onChange={onChange} extraFeature={obj.extraFeature} />
      ))}
    </section>
  );
}
