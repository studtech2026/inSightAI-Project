import { Package, TriangleAlert } from "lucide-react";

export default function LowStockWidget({
  products = [],
}) {
  return (
    <div className="rounded-2xl border border-app bg-card p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-main">
            Low Stock
          </h2>

          <p className="text-sm text-secondary">
            Products that need attention
          </p>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-100 text-yellow-600">
          <TriangleAlert size={20} />
        </div>
      </div>

      {products.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 text-center">
          <Package
            size={40}
            className="mb-3 text-secondary"
          />

          <p className="font-medium text-main">
            Everything looks good
          </p>

          <p className="mt-1 text-sm text-secondary">
            No low-stock products found.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {products.map((product) => (
            <div
              key={product._id}
              className="
                flex
                items-center
                justify-between
                rounded-xl
                border
                border-app
                p-4
                transition
                hover:bg-card-hover
              "
            >
              <div>
                <h3 className="font-medium text-main">
                  {product.name}
                </h3>

                <p className="text-sm text-secondary">
                  {product.category}
                </p>
              </div>

              <span
                className={`
                  rounded-full
                  px-3
                  py-1
                  text-xs
                  font-semibold
                  ${
                    product.stock === 0
                      ? "bg-red-100 text-red-600"
                      : product.stock <= 2
                      ? "bg-orange-100 text-orange-600"
                      : "bg-yellow-100 text-yellow-700"
                  }
                `}
              >
                {product.stock} left
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}