import Link from "next/link";
import Layout from "../components/Layout";

export default function TermsOfService() {
  return (
    <Layout>
      <h1>利用規約</h1>

      <p>
        この利用規約（以下，「本規約」といいます。）は，f-maple（以下，「当社」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
      </p>

      <h2>第1条（適用）</h2>
      <ol>
        <li>
          <p>
            本規約は，ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。
          </p>
        </li>
        <li>
          <p>
            当社は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
          </p>
        </li>
        <li>
          <p>
            本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
          </p>
        </li>
      </ol>

      <h2>第2条（禁止事項）</h2>
      <ol>
        <li>
          <p>法令または公序良俗に違反する行為</p>
        </li>
        <li>
          <p>犯罪行為に関連する行為</p>
        </li>
        <li>
          <p>
            本サービスの内容等，本サービスに含まれる著作権，商標権ほか知的財産権を侵害する行為
          </p>
        </li>
        <li>
          <p>
            当社，ほかのユーザー，またはその他第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
          </p>
        </li>
        <li>
          <p>当社のサービスの運営を妨害するおそれのある行為</p>
        </li>
        <li>
          <p>不正アクセスをし，またはこれを試みる行為</p>
        </li>
        <li>
          <p>他のユーザーに関する個人情報等を収集または蓄積する行為</p>
        </li>
        <li>
          <p>不正な目的を持って本サービスを利用する行為</p>
        </li>
        <li>
          <p>
            本サービスの他のユーザーまたはその他の第三者に不利益，損害，不快感を与える行為
          </p>
        </li>
        <li>
          <p>面識のない異性との出会いを目的とした行為</p>
        </li>
        <li>
          <p>
            当社のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
          </p>
        </li>
        <li>
          <p>その他，当社が不適切と判断する行為</p>
        </li>
      </ol>

      <h2>第3条（保証の容認および免責事項）</h2>
      <ol>
        <li>
          <p>
            当社は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
          </p>
        </li>
        <li>
          <p>
            当社は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する当社とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
          </p>
        </li>
        <li>
          <p>
            前項ただし書に定める場合であっても，当社は，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（当社またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，当社の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
          </p>
        </li>
        <li>
          <p>
            当社は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
          </p>
        </li>
      </ol>

      <h2>第4条（サービス内容の変更等）</h2>
      <p>
        当社は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
      </p>

      <h2>第5条（利用規約の変更）</h2>
      <p>
        当社は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
      </p>

      <h2>第6条（個人情報の取り扱い）</h2>
      <p>
        当社は，本サービスの利用によって取得する個人情報については，当社「
        <Link href="/privacy-policy">
          <a className="link-primary">プライバシーポリシー</a>
        </Link>
        」に従い適切に取り扱うものとします。
      </p>

      <h2>第7条（権利義務の譲渡の禁止）</h2>
      <p>
        ユーザーは，当社の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
      </p>

      <h2>第8条（準拠法・裁判管轄）</h2>
      <ol>
        <li>
          <p>本規約の解釈にあたっては，日本法を準拠法とします。</p>
        </li>
        <li>
          <p>本規約の解釈にあたっては，日本法を準拠法とします。</p>
        </li>
        <li>
          <p>
            本サービスに関して紛争が生じた場合には，東京都世田谷区を管轄する裁判所を専属的合意管轄とします。
          </p>
        </li>
      </ol>
    </Layout>
  );
}
