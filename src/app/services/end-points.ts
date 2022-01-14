export class EndPoints {
  //public static API_END_POINT = 'http://localhost:3000/api/';
  public static API_END_POINT = 'https://offerlia.com/api/';
  //public static IMAGE_END_POINT = 'http://localhost:3004';
   //public static IMAGE_END_POINT = 'http://35.182.13.137:3004';
  public static IMAGE_END_POINT = 'https://offerlia.com/images/';
  public static LOGIN_URL = EndPoints.API_END_POINT + 'auth/user';
  public static LOGOUT = EndPoints.API_END_POINT + 'users/logout?access_token';
  public static USER_TBL = EndPoints.API_END_POINT + 'user_tbl';
  public static GET_USER = EndPoints.API_END_POINT + 'user_tbl?filter[where][user_id]';
  public static STORES = EndPoints.API_END_POINT + 'stores';
  public static GET_STORES = EndPoints.API_END_POINT + 'stores?filter[where][id]';
  public static DEALS = EndPoints.API_END_POINT + 'deals';
  public static GET_DEALS = EndPoints.API_END_POINT + 'deals?filter[where][store_id]';
  public static DEAL_DETAILS = EndPoints.API_END_POINT + 'deals?filter[where][id]';
  public static COUPONS = EndPoints.API_END_POINT + 'coupons';
  public static GET_COUPONS = EndPoints.API_END_POINT + 'coupons?filter[where][store_id]';
  public static COUPON_DETAILS = EndPoints.API_END_POINT + 'coupons?filter[where][id]';
  public static DEAL_IMAGE = EndPoints.API_END_POINT + 'deal_images';
  public static GET_DEAL_IMAGES = EndPoints.API_END_POINT + 'deal_images?filter[where][deal_id]';
  public static USER = EndPoints.API_END_POINT + 'users';
  public static STORE_SUBSCRIPTION = EndPoints.API_END_POINT + 'storesubscription';
  //public static UPLOAD_END_POINT = 'http://localhost:3004/api/';
  public static UPLOAD_END_POINT = 'https://offerlia.com/upload/';
  public static UPLOADFILE = EndPoints.UPLOAD_END_POINT + 'uploadfile';
  public static UPDATE_USER = EndPoints.API_END_POINT + 'users/update';
  public static CATEGORY = EndPoints.API_END_POINT + 'categories';
  public static ACTIVE_LANGUAGES = EndPoints.API_END_POINT + 'languages?filter[where][status]=1';
  public static COUPON_CODE = EndPoints.API_END_POINT + 'generatecode';
  public static COUNTRY = EndPoints.API_END_POINT + 'countries';
  public static PACKAGE = EndPoints.API_END_POINT + 'packages';
  public static ACTIVE_PACKAGE = EndPoints.API_END_POINT + 'packages?filter[where][status]=1';
  public static ACTIVE_COUNTRY = EndPoints.API_END_POINT + 'countries?filter[where][status]=1';
  public static REMOVE_IMAGE = EndPoints.API_END_POINT + 'removefile';
  public static GET_COUPON_WITH_IMAGE = EndPoints.API_END_POINT + 'coupons?filter[where][image_name]';
  public static DEAL_CODE = EndPoints.API_END_POINT + 'vouchercode';
  public static GET_USER_TBL_BY_STORE = EndPoints.API_END_POINT + 'user_tbl?filter[where][store_id]';
  public static ACTIVE_CATEGORIES = EndPoints.API_END_POINT + 'categories?filter[where][status]=1';
  public static GET_CUSTOMER_USER_TBL = EndPoints.API_END_POINT + 'user_tbl?filter[where][user_type]=CUSTOMER&filter[where][user_id]';
  public static FEATURED_DEAL = EndPoints.API_END_POINT + 'deals?filter[where][is_featured]=Y&filter[where][store_id]';
  public static FEATURED_COUPON = EndPoints.API_END_POINT + 'coupons?filter[where][is_featured]=Y&filter[where][store_id]';
  public static ACTIVE_STORES = EndPoints.API_END_POINT + 'stores?filter[where][status]=1';
  public static TOP_RATED_DEALS = EndPoints.API_END_POINT + 'getbestrateddeals';
  public static FEATURED_DEALS = EndPoints.API_END_POINT + 'getfeatureddeals';
  public static TRENDING_STORES = EndPoints.API_END_POINT + 'trendingstores';
  public static FEATURED_COUPONS = EndPoints.API_END_POINT + 'getfeaturedcoupons';
  public static POPULAR_STORES = EndPoints.API_END_POINT + 'popularstores';
  public static ALL_DEALS = EndPoints.API_END_POINT + 'allDeals';
  public static ALL_COUPONS = EndPoints.API_END_POINT + 'allCoupons';
  public static DEAL_BY_ID = EndPoints.API_END_POINT + 'dealByID';
  public static DEAL_IMAGE_BY_ID = EndPoints.API_END_POINT + 'dealImagesByID';
  public static STORE_BY_ID = EndPoints.API_END_POINT + 'storeByID';
  public static DEAL_REVIEWS = EndPoints.API_END_POINT + 'allDealsreviews';
  public static TAXES = EndPoints.API_END_POINT + 'taxes?filter[where][country_id]';
  public static CITIES_BY_COUNTRY = EndPoints.API_END_POINT + 'cities?filter[where][status]=1&filter[where][country_id]';
  public static CREATE_ORDER = EndPoints.API_END_POINT + 'createorder';
  public static STORE_REVIEWS = EndPoints.API_END_POINT + 'allStorereviews';
  public static RATE_STORE = EndPoints.API_END_POINT + 'ratestores';
  public static RATE_DEAL = EndPoints.API_END_POINT + 'ratedeals';
  public static DEAL_COMMENTS = EndPoints.API_END_POINT + 'deal_comments';
  public static DEAL_ENQUIRY = EndPoints.API_END_POINT + 'deal_enquiries';
  public static DEAL_ENQUIRY_COMMENTS = EndPoints.API_END_POINT + 'dealenquirycomments';
  public static DEAL_ENQUIRY_SOLUTIONS = EndPoints.API_END_POINT + 'dealenquirysolutions';
  public static WHISLIST = EndPoints.API_END_POINT + 'wishlists';
  public static DEALS_WHISLIST = EndPoints.API_END_POINT + 'mydealswishlist';
  public static COUPONS_WHISLIST = EndPoints.API_END_POINT + 'mycouponswishlist';
  public static USER_CATEGORY_PREFERENCE = EndPoints.API_END_POINT + 'usercategorypreference';
  public static USER_STORE_PREFERENCE = EndPoints.API_END_POINT + 'userstorepreference';
  public static GET_CATEGORY_PREFERENCE = EndPoints.API_END_POINT + 'myusercategorypreferences';
  public static GET_STORE_PREFERENCE = EndPoints.API_END_POINT + 'myuserstorepreferences';
  public static ALL_STORES = EndPoints.API_END_POINT + 'allstores';
  public static ORDER_BY_STORE = EndPoints.API_END_POINT + 'orderbyStore';
  public static ORDER_BY_ITEMS = EndPoints.API_END_POINT + 'orderItems';
  public static ORDER_PAYMENTS = EndPoints.API_END_POINT + 'orderPayments';
  public static ORDER_UPDATE_STATUS = EndPoints.API_END_POINT + 'updateorderstatus';
  public static UPDATE_DEAL_VIEW = EndPoints.API_END_POINT + 'updatedealsview';
  public static UPDATE_STORE_VIEW = EndPoints.API_END_POINT + 'updatestoreview';
  public static UPDATE_COUPON_VIEW = EndPoints.API_END_POINT + 'updatecouponview';
  public static CHANGE_PASSWORD = EndPoints.API_END_POINT + 'users/change-password?access_token';
  public static GET_USER_PROFILE = EndPoints.API_END_POINT + 'user_tbl?filter[where][user_id]';
  public static UPDATE_USER_PROFILE = EndPoints.API_END_POINT + 'profileupdate';
  public static ORDER_MAIL = EndPoints.API_END_POINT + 'sendordermail';  
  public static SUBSCRIBE = EndPoints.API_END_POINT + 'subscribemailer';
  public static RESET_PASSWORD = EndPoints.API_END_POINT + 'request-password-reset';
  public static LOYALTY_RULES = EndPoints.API_END_POINT + 'loyalty_rules?filter[where][status]=1';
  public static CUSTOMER_OFFERS = EndPoints.API_END_POINT + 'customer_offers?filter[where][status]=1';
  public static CUSTOMER_POINTS = EndPoints.API_END_POINT + 'customer_points?filter[where][customer_id]';
  public static MYORDERS = EndPoints.API_END_POINT + 'customer_points';
  public static OFFER_AVAILABILITY = EndPoints.API_END_POINT + 'checkOfferAvailability';
  public static PRODUCT_AVAILABILITY = EndPoints.API_END_POINT + 'checkProductAvailability';
  public static UPDATE_POINTS = EndPoints.API_END_POINT + 'updatecustomerloyaltypoints';
  public static REFERRAL_MAIL = EndPoints.API_END_POINT + 'sendreferralmail';
  public static REGISTRATION_MAIL = EndPoints.API_END_POINT + 'sendnewuserRegistrationMail';  
  public static WHISLIST_DELETE = EndPoints.API_END_POINT + 'deletewishlist'; 
  public static UPDATE_DEAL_PURCHASE = EndPoints.API_END_POINT + 'updatedealpurchasecount'; 
  public static RESET_PREFERENCE = EndPoints.API_END_POINT + 'resetpreferences';
  public static CUSTOMER_OFFERS_HIGEST_POINTS = EndPoints.API_END_POINT + 'customer_offers?filter[order]=loyalty_points%20DESC&filter[where][status]=1';
  public static CUSTOMER_OFFERS_LOWEST_POINTS = EndPoints.API_END_POINT + 'customer_offers?filter[order]=loyalty_points%20ASC&filter[where][status]=1';
  public static CONTACT_US = EndPoints.API_END_POINT + 'contact_us';
  public static DELETE_USER_SIGNUP = EndPoints.API_END_POINT + 'userduringsignup';
  public static GRAB_COUPON=EndPoints.API_END_POINT + 'grabcoupon';
  public static GRAB_COUPON_MAIL=EndPoints.API_END_POINT + 'grabcouponmail';
  public static IS_FIRST_LOGIN=EndPoints.API_END_POINT + 'isfirstLogin';

  public static IS_ACTIVE_COUPON=EndPoints.API_END_POINT + 'isActiveCoupon';
  public static IS_ACTIVE_DEAL=EndPoints.API_END_POINT + 'isActiveDeal';

public static CUSTOMER_WALLET=EndPoints.API_END_POINT + 'customerWallet';
public static MY_WALLET=EndPoints.API_END_POINT + 'mywallet';
public static MY_WALLET_TRANSACTION=EndPoints.API_END_POINT + 'mywallettransaction';
public static CHECK_POINTSS_PER_MONEY=EndPoints.API_END_POINT + 'checkPointstoMoney';

public static REFER_STORE=EndPoints.API_END_POINT + 'customer_store_refers';
public static STORE_REFER_MAIL=EndPoints.API_END_POINT + 'sendStoreReferMail';
public static CUSTOMER_STORE_DETAILS=EndPoints.API_END_POINT + 'getCustomerStoreRefer';
public static POINTS_HISTORY=EndPoints.API_END_POINT + 'getPointsHistory';

public static SAVE_ADDRESS=EndPoints.API_END_POINT + 'savecustomerAddress';
public static GET_ADDRESS=EndPoints.API_END_POINT + 'customerAddress';


}