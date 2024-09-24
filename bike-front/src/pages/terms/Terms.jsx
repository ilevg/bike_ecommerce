import React from "react";
import styles from "./Terms.module.scss";
import PagesTitle from "../../components/pagesTitle/PagesTitle";
import titleBgImage from "../../assets/img/titlesBg/about.png";
import BrandCarousel from "../../UI/brandCarousel/BrandCarousel";
import classNames from "classnames";

const Terms = () => {
  return (
    <>
      <div className={styles.termsTitleWrapp}>
        <PagesTitle img={titleBgImage} pageName="TERMS AND DEFINITIONS" />
      </div>
      <div className={classNames(styles.terms, "container")}>
        <p>
          Online store "http://world-bike.ru " located on the domain name:
          www.world-bike.ru
        </p>
        <p>
          IP NETREBIN VLADISLAV VYACHESLAVOVICH, hereinafter referred to as the
          "Seller", publishes a Public offer for the sale of Goods remotely
        </p>
        <div className={styles.termsWrapp}>
          <h2>DEFINITION OF TERMS</h2>
          <p>
            <strong>
              1.1. Public offer (hereinafter referred to as the "Offer")
            </strong>{" "}
            - a public offer of the Seller, addressed to an indefinite circle of
            persons, to conclude a contract of sale of goods remotely
            (hereinafter - the "Contract") on the terms contained in this Offer,
            including all Annexes.
          </p>
          <p>
            <strong>
              1.2. Order of the Goods on the website of the online store
            </strong>{" "}
            - positions specified by the Buyer from the assortment of the Goods
            offered for sale when placing an application for the purchase of the
            Goods on the website of the online store or through the Operator.
          </p>

          <h2>GENERAL PROVISIONS</h2>
          <p>
            <strong>2.1. Ordering the Goods by the Buyer</strong>, placed on the
            website of the online store means that the Buyer agrees to all the
            terms of this Offer.
          </p>
          <p>
            <strong>
              2.2. The Administration of the online store website has the right
              to make changes to the Offer
            </strong>{" "}
            without notifying the Buyer.
          </p>
          <p>
            <strong>
              2.3. The validity period of the Offer is not limited
            </strong>
            , unless otherwise indicated on the website of the online store.
          </p>

          <h2>PRICE OF THE GOODS</h2>
          <p>
            <strong>
              3.1. The price for each item of the Goods is indicated on the
              website of the online store.
            </strong>
          </p>
          <p>
            <strong>
              3.2. The Seller has the right to unilaterally change the price for
              any item of the Goods.
            </strong>
          </p>
          <p>
            <strong>
              3.3. In case of a change in the price of the ordered Goods, the
              Seller undertakes to inform the Buyer within five business days
              about the change in the price of the Goods.
            </strong>
          </p>
          <p>
            <strong>
              3.4. The Buyer has the right to confirm or cancel the Order for
              the purchase of the Goods if the price is changed by the Seller
              after the Order is placed.
            </strong>
          </p>
          <p>
            <strong>
              3.5. The Seller is not allowed to change the price of the Goods
              paid by the Buyer.
            </strong>
          </p>
          <p>
            <strong>
              3.6. The Seller specifies the cost of delivering the Goods on the
              website of the online store
            </strong>{" "}
            or informs the Buyer when placing an order through the Operator.
          </p>

          <h2>ORDERING</h2>
          <p>
            <strong>
              4.1. Ordering the Goods is carried out by the Buyer through the
              Operator by phone: +7(495)055-75-86
            </strong>{" "}
            or through the service of the website of the online store
            http://world-bike.ru/
          </p>
          <div>
            <strong>
              4.2. When registering on the website of the online store, the
              Buyer undertakes to provide the following registration
              information:
            </strong>
            <ul>
              <li>
                {" "}
                - Last name, first name, patronymic of the Buyer or the person
                indicated by him (recipient);
              </li>
              <li>
                {" "}
                - Address to which the Goods should be delivered (if delivery to
                the Buyer's address);
              </li>
              <li> - Email address;</li>
            </ul>
          </div>
          <p>
            <strong>
              4.3. Acceptance by the Buyer of the terms of this Offer is carried
              out by the Buyer entering the corresponding data into the
              registration form on the website of the online store
            </strong>{" "}
            or when placing an Order through the Operator. After placing the
            Order through the Operator, the Buyer's data is registered in the
            Seller's database. After confirming the Order of the selected Goods,
            the Buyer provides the Operator with the necessary information in
            accordance with the procedure specified in clause 4.2. of this
            Offer.
          </p>

          <h2>DELIVERY AND TRANSFER OF GOODS TO THE BUYER</h2>
          <p>
            <strong>
              5.1. The Seller provides the Buyer with services for the delivery
              of the Goods by one of the methods specified on the website of the
              online store.
            </strong>
          </p>
          <p>
            <strong>
              5.2. If the Contract of sale of goods remotely (hereinafter
              referred to as the Contract) is concluded with the condition of
              delivering the Goods to the Buyer, the Seller undertakes to
              deliver the Goods within the period specified in the Contract to
              the place specified by the Buyer, and if the place of delivery of
              the Goods by the Buyer is not specified, then to the place of his
              residence or registration.
            </strong>
          </p>
          <p>
            <strong>
              5.3. The place of delivery of the Goods is specified by the Buyer
              when placing an Order to purchase the Goods.
            </strong>
          </p>
          <p>
            <strong>
              5.4. The delivery time of the Goods to the Buyer consists of the
              order processing time and the delivery time.
            </strong>
          </p>
          <p>
            <strong>
              5.5. The delivered Goods are handed over to the Buyer, and in the
              absence of the Buyer - to any person who presents a receipt or
              other document confirming the conclusion of the Contract or the
              registration of the delivery of the Goods.
            </strong>
          </p>

          <h2>RETURN, EXCHANGE OF GOODS</h2>
          <p>
            <strong>
              6.1. The Goods are accepted for return in case of warranty
              breakdowns or factory defects during the warranty period specified
              by the manufacturer.
            </strong>
          </p>
          <p>
            <strong>
              6.2. After the expiration of the warranty service period declared
              by the manufacturer of the goods on the official website, the
              goods are not accepted for warranty repair or exchange.
            </strong>
          </p>
          <p>
            <strong>
              6.3. Return or exchange of the Goods within 14 calendar days is
              carried out in accordance with the rules described in the
              "Consumer Protection Law, Article 25".
            </strong>
          </p>
          <p>
            <strong>
              6.4. Rules for returning the goods under warranty or exchange:
            </strong>{" "}
            The Goods must have complete equipment corresponding to the
            description on the box, a clean appearance, a sales receipt. The
            goods are returned to the address: Moscow, Dovatora, 7/8 s1 (please
            notify in advance of the visit). Pickup of goods by courier in
            Moscow for warranty assessment or exchange is possible, cost 600
            rubles.
          </p>

          <h2>SELLER'S DETAILS / LEGAL INFORMATION</h2>
          <ul>
            <li>Taxpayer Identification Number (INN): 402573939444</li>
            <li>Main State Registration Number (OGRN): 317402700004683</li>
            <li>Settlement account: 40802810800000085888</li>
            <li>Correspondent account: 30101810145250000974</li>
            <li>BIC (Bank Identifier Code): 044525974</li>
          </ul>
        </div>
      </div>
      <BrandCarousel />
    </>
  );
};

export default Terms;
