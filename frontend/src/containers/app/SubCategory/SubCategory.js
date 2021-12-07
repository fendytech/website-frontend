import { OutfitThumbnail, OutfitThumbnailContainer, SubCategoryContainer, SubCategoryTitle } from "./styles/OutfitThumnailComponent";
import { TitleComponent } from "./styles/TitleComponent";

const SubCategoryScreen = () => {

  return (
    <div>
      <TitleComponent title="Mens Outfit">
        Mens Outfit
      </TitleComponent>
      <SubCategoryContainer>
        <OutfitThumbnailContainer>
          <OutfitThumbnail src="https://images.unsplash.com/photo-1612766985423-d063f992e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"/>
          <SubCategoryTitle>Office</SubCategoryTitle>
        </OutfitThumbnailContainer>
        <OutfitThumbnailContainer>
          <OutfitThumbnail src="https://images.unsplash.com/photo-1612766985423-d063f992e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"/>
          <SubCategoryTitle>Office</SubCategoryTitle>
        </OutfitThumbnailContainer>
        <OutfitThumbnailContainer>
          <OutfitThumbnail src="https://images.unsplash.com/photo-1612766985423-d063f992e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"/>
          <SubCategoryTitle>Office</SubCategoryTitle>
        </OutfitThumbnailContainer>
        <OutfitThumbnailContainer>
          <OutfitThumbnail src="https://images.unsplash.com/photo-1612766985423-d063f992e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"/>
          <SubCategoryTitle>Office</SubCategoryTitle>
        </OutfitThumbnailContainer>
        <OutfitThumbnailContainer>
          <OutfitThumbnail src="https://images.unsplash.com/photo-1612766985423-d063f992e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"/>
          <SubCategoryTitle>Office</SubCategoryTitle>
        </OutfitThumbnailContainer>
        <OutfitThumbnailContainer>
          <OutfitThumbnail src="https://images.unsplash.com/photo-1612766985423-d063f992e7d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"/>
          <SubCategoryTitle>Office</SubCategoryTitle>
        </OutfitThumbnailContainer>
      </SubCategoryContainer>
    </div>
  );
}

export default SubCategoryScreen;