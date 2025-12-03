import currentFuelTimeLoss from "../service/current-fueltimeloss-service.js";

const get = async (req, res, next) => {
  try {
    const department = req.params.department;

    // Timeout promise (5 detik)
    // const timeout = new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve([]); // return array kosong kalau lewat 5 detik
    //   }, 5000);
    // });

    // Fetch data
    // const query = await currentFuelTimeLoss.get(department);

    // Ambil hasil yang selesai duluan (timeout atau query)
    // const result = await Promise.race([query, timeout]);

    const result = await currentFuelTimeLoss.get(department);

    res.status(200).json({
      data: result,
    });
  } catch (e) {
    next(e);
  }
};

export default {
  get,
};
