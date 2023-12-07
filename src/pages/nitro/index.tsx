import {
  NitroPageWrapper,
  NitroHeaderBlock,
  NitroPerksBlock,
  NitroPlanTableBlock,
  NitroBuyingButtonsBlock,
} from '../../common/components/nitro';

function Nitro() {
  return (
    <NitroPageWrapper>
      <NitroHeaderBlock />
      <NitroPerksBlock />
      <NitroPlanTableBlock />
      <NitroBuyingButtonsBlock />
    </NitroPageWrapper>
  );
}

export default Nitro;
