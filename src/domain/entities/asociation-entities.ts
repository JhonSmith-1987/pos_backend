import AccountEntity from "./account-entity";
import UserEntity from "./user-entity";
import RoleEntity from "./role-entity";
import UserRoleRelEntity from "./user-role-rel";
import ProductEntity from "./product-entity";
import CategoryEntity from "./category-entity";
import OrderEntity from "./order-entity";
import OrderItemEntity from "./order-item-entity";
import PaymentEntity from "./payment-entity";
import InventoryMovementsEntity from "./inventory-movements-entity";


// account rel user
AccountEntity.hasMany(UserEntity,{
    as: 'account-users',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});
UserEntity.belongsTo(AccountEntity, {
    as: 'user-account',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

// account rel role
AccountEntity.hasMany(RoleEntity,{
    as: 'account-roles',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});
RoleEntity.belongsTo(AccountEntity, {
    as: 'role-account',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

// rel UserEntity-----UserRoleRelEntity------RoleEntity
UserEntity.belongsToMany(RoleEntity, {
    through: UserRoleRelEntity,
    as: 'roles',
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
RoleEntity.belongsToMany(UserEntity, {
    through: UserRoleRelEntity,
    as: 'users',
    foreignKey: 'role_id',
    onDelete: 'CASCADE'
});

// AccountEntity rel ProductEntity
AccountEntity.hasMany(ProductEntity,{
    as: 'account-products',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});
ProductEntity.belongsTo(AccountEntity, {
    as: 'product-account',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

// CategoryEntity rel ProductEntity
CategoryEntity.hasMany(ProductEntity,{
    as: 'category-products',
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});
ProductEntity.belongsTo(CategoryEntity, {
    as: 'product-category',
    foreignKey: 'category_id',
    onDelete: 'CASCADE'
});

// AccountEntity rel CategoryEntity
AccountEntity.hasMany(CategoryEntity,{
    as: 'account-categories',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});
CategoryEntity.belongsTo(AccountEntity, {
    as: 'category-account',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

// AccountEntity rel OrderEntity
AccountEntity.hasMany(OrderEntity,{
    as: 'account-orders',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});
OrderEntity.belongsTo(AccountEntity, {
    as: 'order-account',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

// UserEntity rel OrderEntity
UserEntity.hasMany(OrderEntity,{
    as: 'user-orders',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});
OrderEntity.belongsTo(UserEntity, {
    as: 'order-user',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

// OrderEntity rel OrderItemEntity
OrderEntity.hasMany(OrderItemEntity,{
    as: 'order-orderItems',
    foreignKey: 'order_id',
    onDelete: 'CASCADE'
});
OrderItemEntity.belongsTo(OrderEntity, {
    as: 'orderItem-order',
    foreignKey: 'order_id',
    onDelete: 'CASCADE'
});

// ProductEntity rel OrderItemEntity
ProductEntity.hasMany(OrderItemEntity,{
    as: 'product-orderItems',
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});
OrderItemEntity.belongsTo(ProductEntity, {
    as: 'orderItem-product',
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});

// OrderEntity rel PaymentEntity
OrderEntity.hasMany(PaymentEntity,{
    as: 'order-payments',
    foreignKey: 'order_id',
    onDelete: 'CASCADE'
});
PaymentEntity.belongsTo(OrderEntity, {
    as: 'payment-order',
    foreignKey: 'order_id',
    onDelete: 'CASCADE'
});

// AccountEntity rel InventoryMovementsEntity
AccountEntity.hasMany(InventoryMovementsEntity,{
    as: 'account-inventoryMovements',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});
InventoryMovementsEntity.belongsTo(AccountEntity, {
    as: 'inventoryMovement-account',
    foreignKey: 'account_id',
    onDelete: 'CASCADE'
});

// ProductEntity rel InventoryMovementsEntity
ProductEntity.hasMany(InventoryMovementsEntity,{
    as: 'product-inventoryMovements',
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});
InventoryMovementsEntity.belongsTo(ProductEntity, {
    as: 'inventoryMovement-product',
    foreignKey: 'product_id',
    onDelete: 'CASCADE'
});