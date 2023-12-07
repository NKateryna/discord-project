import styles from './index.module.css';
import ButtonNitro from '../ButtonNitro';
import {
  NitroPlanNitro,
  NitroPlanTableCheck,
  NitroPlanTableCross,
  NitroTitleNitroGift,
} from '../../icons/nitro-page';
import { JSXElement } from '../../../../types';

function NitroPlanTable() {
  const included = (included: boolean): JSXElement => {
    return included ? <NitroPlanTableCheck /> : <NitroPlanTableCross />;
  };

  return (
    <div className={styles.box}>
      <div className={styles.table}>
        <div className={styles.columnDecoration}>
          <div className={styles.columnDecoration_label}>{'MOST POPULAR'}</div>
        </div>
        <table>
          <thead>
            <tr className={styles.table__titleRow}>
              <th className={styles.table__titleText}>
                {'Pricing and Features'}
              </th>
              <th className={styles.table__titleNitroNameIcon}>
                <img
                  alt="NitroPlanNitroBasic"
                  src="nitro-plan-basic_nitro_text_center.png"
                />
              </th>
              <th className={styles.table__titleNitroNameIcon}>
                <NitroPlanNitro />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>{'Price'}</th>
              <td className={styles.table_cellСolumnPerks}>{'$2.99/month'}</td>
              <td className={styles.table_cellСolumnPerks}>{'$9.99/month'}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Custom emoji anywhere and make them animated'}
              </th>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Custom stickers anywhere'}
              </th>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Super Reactions'}
              </th>
              <td className={styles.table_cellСolumnPerks}>{'2/week'}</td>
              <td className={styles.table_cellСolumnPerks}>{'5/week'}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Bigger file sharing'}
              </th>
              <td className={styles.table_cellСolumnPerks}>{'50 MB'}</td>
              <td className={styles.table_cellСolumnPerks}>{'500 MB'}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'HD streaming'}
              </th>
              <td className={styles.table_cellСolumnPerks}>
                {included(false)}
              </td>
              <td className={styles.table_cellСolumnPerks}>
                {'Up to 4K and 60fps'}
              </td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'2 Boosts + 30% off extra Boosts'}
              </th>
              <td className={styles.table_cellСolumnPerks}>
                {included(false)}
              </td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Animated avatar, banner, and profile theme'}
              </th>
              <td className={styles.table_cellСolumnPerks}>
                {included(false)}
              </td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Custom server profiles'}
              </th>
              <td className={styles.table_cellСolumnPerks}>
                {included(false)}
              </td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Colors for your Discord theme'}
              </th>
              <td className={styles.table_cellСolumnPerks}>
                {included(false)}
              </td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Nitro badge on your profile'}
              </th>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Custom video backgrounds'}
              </th>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Custom Sounds Anywhere'}
              </th>
              <td className={styles.table_cellСolumnPerks}>
                {included(false)}
              </td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Join up to 200 servers'}
              </th>
              <td className={styles.table_cellСolumnPerks}>
                {included(false)}
              </td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_row}>
              <th className={styles.table_headerCellСolumnPerks}>
                {'Longer messages up to 4000 characters'}
              </th>
              <td className={styles.table_cellСolumnPerks}>
                {included(false)}
              </td>
              <td className={styles.table_cellСolumnPerks}>{included(true)}</td>
            </tr>
            <tr className={styles.table_rowBuying}>
              <td className={styles.table_headerCellСolumnPerks}></td>
              <td className={styles.table_cellBuying}>
                <div className={styles.table_buttonBuying}>
                  <ButtonNitro text={'Subscribe'} color={'white'} />
                </div>
                <div className={styles.table_buttonBuying}>
                  <ButtonNitro
                    icon={<NitroTitleNitroGift />}
                    text={'Gift Nitro Basic'}
                    color={'transparent'}
                  />
                </div>
              </td>
              <td className={styles.table_cellBuying}>
                <div className={styles.table_buttonBuying}>
                  <ButtonNitro text={'Subscribe'} color={'white'} />
                </div>
                <div className={styles.table_buttonBuying}>
                  <ButtonNitro
                    icon={<NitroTitleNitroGift />}
                    text={'Gift Nitro'}
                    color={'transparent'}
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default NitroPlanTable;
