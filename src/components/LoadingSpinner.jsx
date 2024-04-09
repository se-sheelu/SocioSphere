const LoadingSpiner = () => {
  return (
    <>
      <div class="text-center">
        <div
          class="spinner-border"
          role="status"
          style={{ width: "5rem", height: "5rem" }}
        >
          <span class="visually-hidden"></span>
        </div>
      </div>
    </>
  );
};

export default LoadingSpiner;
