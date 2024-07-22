import Icon3 from "@/resources/images/icon-gr3.png";
import Photo from "@/resources/images/photo.jpeg"
import "./User.css";

export function User() {
    return (

        <>
            <div className="user">
                <img
                    src={Icon3}
                    className="user-image"
                    alt="Изображеине пользователя"
                />
                <div className="user-data">
                    <div className="user-data-inner">
                        <p className="user-name">Константин</p>
                        <p className="user-message">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                            Esse voluptas tempore suscipit. Non soluta asperiores
                            officia perferendis quia enim accusamus quam, doloremque,
                            ut odit maiores repellat facere, similique inventore
                            voluptates!
                        </p>

                    </div>
                </div>
            </div>

            <div className="user">
                <img
                    src={Photo}
                    className="user-image"
                    alt="Изображеине пользователя"
                />
                <div className="user-data">
                    <div className="user-data-inner">
                        <p className="user-name">Константин</p>
                        <p className="user-message">
                            Lorem ipsum dolorpisicing elit.

                        </p>

                    </div>
                </div>
            </div>
        </>


    );
};