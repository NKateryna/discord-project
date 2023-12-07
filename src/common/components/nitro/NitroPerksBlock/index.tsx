import styles from './index.module.css';
import PerkskListMidlSizeItem from '../PerkskListMidlSizeItem';
import PerkskListSmallSizeItem from '../PerkskListSmallSizeItem';
import {
  NitroPerk10CustomSound,
  NitroPerk1BiggerFile,
  NitroPerk2AppsAndGames,
  NitroPerk3CustomEmoji,
  NitroPerk4ServerBoosts,
  NitroPerk5SpecialSticker,
} from '../../icons/nitro-page';

export function NitroPerksBlock() {
  return (
    <div className={styles.box}>
      <div className={styles.title}>{'Favourite Nitro Perks'}</div>
      <div className={styles.perksBlockList}>
        <div className={styles.perksBlockList__midlSizeItems}>
          <PerkskListMidlSizeItem
            title={
              <span>
                From clips to pics, share away with bigger
                <br />
                file uploads
              </span>
            }
            icon={<NitroPerk1BiggerFile />}
          />
          <PerkskListMidlSizeItem
            title={
              <span>
                Stream apps and games in sweet, sweet <br /> HD
              </span>
            }
            icon={<NitroPerk2AppsAndGames />}
          />
          <PerkskListMidlSizeItem
            title={
              <span>
                Hype, roast, and meme with custom <br />
                emoji anywhere
              </span>
            }
            icon={<NitroPerk3CustomEmoji />}
          />
          <PerkskListMidlSizeItem
            title={
              <span>
                Unlock perks for your communities with <br />2 Server Boosts
              </span>
            }
            icon={<NitroPerk4ServerBoosts />}
          />
        </div>
        <div className={styles.perksBlockList__smallSizeItems}>
          <PerkskListSmallSizeItem
            icon={<NitroPerk5SpecialSticker />}
            title={'Special Sticker Access'}
            subtitle={'Use custom stickers anywhere.'}
          />
          <PerkskListSmallSizeItem
            icon={
              <img
                alt="Custom Profiles"
                src="nitro-perk-6-custom_profiles.png"
              />
            }
            title={'Custom Profiles'}
            subtitle={
              <span>
                Use a different avatar, profile theme, banner,
                <br />
                and bio in each of your servers.
              </span>
            }
          />
          <PerkskListSmallSizeItem
            icon={
              <img alt="Color Themes" src="nitro-perk-7-color_themes.png" />
            }
            title={'Color Themes'}
            beta={true}
            subtitle={
              <span>
                Add your vibe to Discord with unique
                <br />
                theme colors.
              </span>
            }
          />
          <PerkskListSmallSizeItem
            newPerk={true}
            icon={
              <img
                alt="Super Reactions"
                src="nitro-perk-8-super_reactions.png"
              />
            }
            title={'Super Reactions'}
            subtitle={
              <span>
                Hype up the chat with action-packed,
                <br />
                animated reactions.
              </span>
            }
          />
          <PerkskListSmallSizeItem
            icon={<img alt="Nitro Badge" src="nitro-perk-9-nitro_badge.png" />}
            title={'Nitro Badge'}
            subtitle={
              <span>
                Show off your Nitro membership with a<br />
                badge in your profile.
              </span>
            }
          />
          <PerkskListSmallSizeItem
            newPerk={true}
            icon={<NitroPerk10CustomSound />}
            title={'Custom Sound Anywhere'}
            subtitle={
              <span>
                React with Soundboard custom sounds
                <br />
                in all voice channels.
              </span>
            }
          />
          <PerkskListSmallSizeItem
            icon={
              <img
                alt="Longer Messages"
                src="nitro-perk-11-longer_messages.png"
              />
            }
            title={'Longer Messages'}
            subtitle={
              <span>
                Say what’s on your mind with an
                <br />
                increased character count.
              </span>
            }
          />
          <PerkskListSmallSizeItem
            icon={
              <img alt="More Servers" src="nitro-perk-12-more_servers.png" />
            }
            title={'More Servers'}
            subtitle={'Join up to 200 of your favorite servers.'}
          />
        </div>
      </div>
    </div>
  );
}
