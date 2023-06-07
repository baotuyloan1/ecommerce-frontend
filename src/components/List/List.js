import "./List.scss"
import Card from "../Card/Card";
const List = () => {
  const data =
    // 20230607203124
    {
      _embedded: {
        laptopDtoList: [
          {
            createTime: "2023-06-07T07:09:20.218+00:00",
            updateTime: "2023-06-07T13:27:59.157+00:00",
            id: 20005,
            name: "laptop gaming mssi a112 1",
            description: "",
            price: 1111.0,
            image: "Screenshot 2023-03-28 115248.png",
            brandDto: {
              createTime: "2023-05-26T09:40:06.479+00:00",
              updateTime: null,
              id: 1,
              name: "MSI",
              description: "MSI dessc",
            },
            stockDtoSet: null,
            type: "laptop",
            productLogDtoSet: [],
            imageDetailDtoSet: [
              {
                createTime: "2023-06-07T07:09:20.256+00:00",
                id: 20007,
                url: "/images/laptop-photos/20005/Screenshot 2023-03-29 125259.png",
                name: "Screenshot 2023-03-29 125259.png",
                size: 518143.0,
                description: "Description of Screenshot 2023-03-29 125259.png",
                productId: 20005,
              },
              {
                createTime: "2023-06-07T07:09:20.250+00:00",
                id: 20006,
                url: "/images/laptop-photos/20005/Screenshot 2023-03-27 213217.png",
                name: "Screenshot 2023-03-27 213217.png",
                size: 239808.0,
                description: "Description of Screenshot 2023-03-27 213217.png",
                productId: 20005,
              },
            ],
            screen: "11",
            cpu: "",
            ram: "",
            hardDrive: "",
            graphicsCard: null,
            operatingSystem: "",
            releaseYear: 0,
            connector: "",
            material: "",
            sizeWeight: "",
            categories: [
              {
                createTime: null,
                updateTime: "2023-06-02T13:05:45.565+00:00",
                id: 1002,
                name: "laptop 2",
                description: "laptop",
                childrenDtoSet: null,
                level: 0,
              },
            ],
            imgUrl:
              "/images/laptop-photos/20005/Screenshot 2023-03-28 115248.png",
            _links: {
              self: {
                href: "http://localhost:8080/api/products/20005",
              },
              collection: {
                href: "http://localhost:8080/api/products/",
              },
            },
          },
        ],
        phoneDtoList: [
          {
            createTime: "2023-06-07T06:55:28.509+00:00",
            updateTime: "2023-06-07T13:27:59.157+00:00",
            id: 20003,
            name: "laptop gaming mssi a112",
            description: "",
            price: 1111.0,
            image: "Screenshot 2023-03-27 224626.png",
            brandDto: {
              createTime: "2023-05-26T09:40:06.479+00:00",
              updateTime: null,
              id: 1,
              name: "MSI",
              description: "MSI dessc",
            },
            stockDtoSet: null,
            type: "phone",
            productLogDtoSet: [],
            imageDetailDtoSet: [
              {
                createTime: "2023-06-07T06:55:28.557+00:00",
                id: 20002,
                url: "/images/phone-photos/20003/Screenshot 2023-04-06 070731.png",
                name: "Screenshot 2023-04-06 070731.png",
                size: 89103.0,
                description: "Description of Screenshot 2023-04-06 070731.png",
                productId: 20003,
              },
              {
                createTime: "2023-06-07T06:55:28.571+00:00",
                id: 20003,
                url: "/images/phone-photos/20003/Screenshot 2023-04-06 133000.png",
                name: "Screenshot 2023-04-06 133000.png",
                size: 153795.0,
                description: "Description of Screenshot 2023-04-06 133000.png",
                productId: 20003,
              },
            ],
            screen: "12",
            ram: "",
            camera: "",
            batteryCharge: "",
            operatingSystem: "",
            storageCapacity: "",
            frontFacingCamera: "",
            rearCamera: "",
            chip: "",
            sim: "",
            categories: [
              {
                createTime: null,
                updateTime: "2023-06-02T13:05:45.565+00:00",
                id: 1002,
                name: "laptop 2",
                description: "laptop",
                childrenDtoSet: null,
                level: 0,
              },
            ],
            imgUrl:
              "/images/phone-photos/20003/Screenshot 2023-03-27 224626.png",
            _links: {
              self: {
                href: "http://localhost:8080/api/products/20003",
              },
              collection: {
                href: "http://localhost:8080/api/products/",
              },
            },
          },
          {
            createTime: "2023-06-07T07:03:19.948+00:00",
            updateTime: "2023-06-07T13:27:59.157+00:00",
            id: 20004,
            name: "Iphone 13",
            description: "",
            price: 4444.0,
            image: "Screenshot 2023-03-27 224626.png",
            brandDto: {
              createTime: "2023-05-26T09:40:06.479+00:00",
              updateTime: null,
              id: 1,
              name: "MSI",
              description: "MSI dessc",
            },
            stockDtoSet: null,
            type: "phone",
            productLogDtoSet: [],
            imageDetailDtoSet: [
              {
                createTime: "2023-06-07T07:03:19.965+00:00",
                id: 20005,
                url: "/images/phone-photos/20004/Screenshot 2023-04-09 190257.png",
                name: "Screenshot 2023-04-09 190257.png",
                size: 62915.0,
                description: "Description of Screenshot 2023-04-09 190257.png",
                productId: 20004,
              },
              {
                createTime: "2023-06-07T07:03:19.962+00:00",
                id: 20004,
                url: "/images/phone-photos/20004/Screenshot 2023-04-08 223724.png",
                name: "Screenshot 2023-04-08 223724.png",
                size: 154548.0,
                description: "Description of Screenshot 2023-04-08 223724.png",
                productId: 20004,
              },
            ],
            screen: "32",
            ram: "",
            camera: "",
            batteryCharge: "",
            operatingSystem: "",
            storageCapacity: "1",
            frontFacingCamera: "",
            rearCamera: "",
            chip: "",
            sim: "",
            categories: [
              {
                createTime: "2023-05-27T03:47:46.626+00:00",
                updateTime: null,
                id: 1003,
                name: "phone",
                description: "phone mobile",
                childrenDtoSet: null,
                level: 0,
              },
              {
                createTime: "2023-05-27T03:48:21.884+00:00",
                updateTime: null,
                id: 1004,
                name: "iphone",
                description: "iphone",
                childrenDtoSet: null,
                level: 0,
              },
            ],
            imgUrl:
              "/images/phone-photos/20004/Screenshot 2023-03-27 224626.png",
            _links: {
              self: {
                href: "http://localhost:8080/api/products/20004",
              },
              collection: {
                href: "http://localhost:8080/api/products/",
              },
            },
          },
          {
            createTime: "2023-06-07T09:55:21.040+00:00",
            updateTime: "2023-06-07T13:27:59.157+00:00",
            id: 20006,
            name: "samsung gamin 15",
            description: "",
            price: 1111.0,
            image: "Screenshot 2023-04-06 175427.png",
            brandDto: {
              createTime: "2023-05-26T09:40:06.479+00:00",
              updateTime: null,
              id: 1,
              name: "MSI",
              description: "MSI dessc",
            },
            stockDtoSet: null,
            type: "phone",
            productLogDtoSet: [],
            imageDetailDtoSet: [
              {
                createTime: "2023-06-07T09:55:21.093+00:00",
                id: 20009,
                url: "/images/phone-photos/20006/Screenshot 2023-04-08 214954.png",
                name: "Screenshot 2023-04-08 214954.png",
                size: 341579.0,
                description: "Description of Screenshot 2023-04-08 214954.png",
                productId: 20006,
              },
              {
                createTime: "2023-06-07T09:55:21.083+00:00",
                id: 20008,
                url: "/images/phone-photos/20006/Screenshot 2023-04-09 193838.png",
                name: "Screenshot 2023-04-09 193838.png",
                size: 101858.0,
                description: "Description of Screenshot 2023-04-09 193838.png",
                productId: 20006,
              },
            ],
            screen: "10",
            ram: "",
            camera: "",
            batteryCharge: "",
            operatingSystem: "",
            storageCapacity: "1",
            frontFacingCamera: "",
            rearCamera: "",
            chip: "",
            sim: "",
            categories: [
              {
                createTime: "2023-05-27T03:47:46.626+00:00",
                updateTime: null,
                id: 1003,
                name: "phone",
                description: "phone mobile",
                childrenDtoSet: null,
                level: 0,
              },
              {
                createTime: "2023-05-27T03:49:33.255+00:00",
                updateTime: null,
                id: 1007,
                name: "samsung",
                description: "samsung vip lam",
                childrenDtoSet: null,
                level: 0,
              },
              {
                createTime: "2023-05-27T03:49:53.179+00:00",
                updateTime: null,
                id: 1008,
                name: "samsung gaming",
                description: "gaming",
                childrenDtoSet: null,
                level: 0,
              },
            ],
            imgUrl:
              "/images/phone-photos/20006/Screenshot 2023-04-06 175427.png",
            _links: {
              self: {
                href: "http://localhost:8080/api/products/20006",
              },
              collection: {
                href: "http://localhost:8080/api/products/",
              },
            },
          },
        ],
      },
    };

  const products = data._embedded.laptopDtoList.concat(
    data._embedded.phoneDtoList
  );
  return (
    <div className="list">
      {products?.map((item) => (
        <Card item={item} key={item.id} />
      ))}{" "}
    </div>
  );
};


export default List;